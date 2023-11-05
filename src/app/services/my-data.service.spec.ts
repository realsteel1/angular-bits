import { TestBed, flush } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeAsync, tick } from '@angular/core/testing';
import { MyService } from './my-data.service';

describe('MyService', () => {
  let service: MyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MyService],
    });

    service = TestBed.inject(MyService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should make an HTTP POST request with retries', fakeAsync(() => {
    const payload = { data: 'test' };
    let errMessage = 'Failed';

    let response: any;
    service.makeHttpPostWithRetries(payload).subscribe(res => {
      response = res;
    });

    for (let i = 0; i < 3; i++) {
      tick(1000); // Advance time by 1 second
      httpTestingController
        .expectOne({url: 'your-api-url-here', method: 'POST'})
        .flush(new ErrorEvent('network error'), { status: 404, statusText: errMessage });
    }

    // The final response should be an error
    expect(response).toBeInstanceOf(ErrorEvent);


    httpTestingController.verify();
    flush();
  }));
});
