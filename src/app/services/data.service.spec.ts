import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return data from the HTTP response', () => {
    const responseData = ['Item 1', 'Item 2'];

    service.getData().subscribe((data) => {
      expect(data).toEqual(responseData);
    });

    const req = httpMock.expectOne('your-api-endpoint');
    expect(req.request.method).toBe('GET');

    req.flush(responseData);
  });

  it('should return default value when the HTTP response is empty', () => {
    const defaultData = ['Default Value'];

    service.getData().subscribe((data) => {
      expect(data).toEqual(defaultData);
    });

    const req = httpMock.expectOne('your-api-endpoint');
    expect(req.request.method).toBe('GET');

    req.flush([]);
  });
});
