import { Component } from '@angular/core';

interface Link {
  name: string;
  path: string;
  url?: string;
  children?: Link[];
}

@Component({
  selector: 'hierarchical-links',
  styleUrls: ['hierarchical-links.component.scss'],
  templateUrl: 'hierarchical-links.component.html',
})
export class HierarchicalLinksComponent {
  transformedLinks!: string;
  unTransformedLinks!: string;

  links: Link[] = [
    { name: 'New Transaction', path: 'New Transaction', url: "http://somelink.com/New+Transaction"},
    { name: 'Traditional', path: 'New Wall Crossing Request/Traditional', url: "http://somelink.com/New Wall Crossing Request/Traditional"},
    { name: 'Vetting', path: 'New Wall Crossing Request/Vetting', url: "http://somelink.com/New Wall Crossing Request/Vetting"}
  ];

  ngOnInit() {

    var url = "https://qa.citivelocity.com/someurl/home";
    var params = {
      redirectUrl: "https://qa.citivelocity.com/my/opus/home"
    };
    var encodedParams = new URLSearchParams(params).toString();
    var encodedUrl = url + "?" + encodedParams;
    console.log(encodedUrl);

    const encoded = 'https://qa.citivelocity.com/someurl/home?redirectUrl=https%3A%2F%2Fqa.citivelocity.com%2Fmy%2Fopus%2Fhome';
    const result = decodeURI(encoded);
    console.debug('decoded URI:', result);


    //const result = encodeURI('https://qa.citivelocity.com/someurl/home?redirectUrl=https://qa.citivelocity.com/my/opus/home');
    // console.debug('Result of encofde', result);

    const componentMap: Map<string, any> = new Map([
      ['component1', new HierarchicalLinksComponent()],
      ['component2', new HierarchicalLinksComponent()],
      ['component3', new HierarchicalLinksComponent()],
    ]);

    componentMap.forEach((value, key) => {
      console.log(`Key: ${key}, Value:`, value);
    });

    this.unTransformedLinks = JSON.stringify(this.links, null, 2);
  }

  transform() {
    let textAreaJsonLinks = JSON.parse(this.unTransformedLinks) as Link[];
    const flattenedTree = this.buildTreeLinks(textAreaJsonLinks); //this.links
    this.transformedLinks = JSON.stringify(flattenedTree, null, 2);
  }

  buildTreeLinks(flattenedLinks: Link[]): Link[] {
    const root: Link = { name: '', path: '', children: [], url: '' };

    for (const link of flattenedLinks) {
      const segments = link.path.split('/');
      let currentNode = root;

      for (const segment of segments) {
        currentNode.children ??= [];

        let childNode = currentNode.children.find(
          (node) => node.name === segment
        );

        if (!childNode) {
          childNode = { name: segment, path: segment, url: link.url };
          currentNode.children.push(childNode);
          currentNode.url = undefined;
        }

        currentNode = childNode!;
      }
    }

    return root.children || [];
  }
}
