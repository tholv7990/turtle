import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UtilService {
  constructor() { }

  public static getLocation(href = ''): any {
    if (!href) href = UtilService.getWindowHref();

    const match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
    return (
      match && {
        href: href,
        protocol: match[1],
        host: match[2],
        hostName: match[3],
        port: match[4],
        pathName: match[5],
        search: match[6],
        hash: match[7]
      }
    );
  }

  public static getURLParameter(name, url = '') {
    if (!url) {
      url = UtilService.getWindowHref();
    }

    return (RegExp(name + '=' + '(.+?)(&|$)').exec(url) || [, null])[1];
  }

  public static getFullURLParameter(url = '') {
    if (!url) {
      url = UtilService.getWindowHref();
    }

    const index = url.indexOf('?');
    if (index >= 0) {
      return url.substring(index);
    }
    return url;
  }

  public static getWindowHref() {
    return UtilService.getWindow().location.href;
  }

  public static getWindow(): Window {
    return window as Window;
  }

  public static getDocument() {
    return document;
  }

  public static navigate(url, callbackUrl: string = '') {
    const w = UtilService.getWindow();

    if (callbackUrl) {
      url = `${url}?returnUrl=${encodeURIComponent(callbackUrl)}`;
    }

    w.location.href = url;
  }

  public static navigateWithParams(url, params: any = null) {
    const w = UtilService.getWindow();

    if (params) {
      const keys = Object.keys(params);
      const query = keys
        .map(p => {
          return `${p}=${params[p]}`;
        })
        .join();
      url = `${url}?${query}`;
    }

    w.location.href = url;
  }

  public static printImage(url: string): void {

    const content = '<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">'+
      '<head></head>'+
      '<body><img id="print-image-element" src="'+url+'"/>'+
      '<script type="text/javascript">function printPage() { window.focus(); window.print(); return; }</script>'+
      '</body></html>';

    const newIframe = document.createElement('iframe') as any;
    newIframe.width = '0';
    newIframe.height = '0';
    newIframe.src = 'about:blank';
    document.body.appendChild(newIframe);

    newIframe.contentWindow['contents'] = content;
    newIframe.src = 'javascript:window["contents"]';

    newIframe.focus();

    newIframe.onload = function() {
      newIframe.contentWindow.printPage();
    }
  }
}
