import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public base = 0;
  public elements: any;
  public elementsli: any;
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {}


  sidebar( event: any) {
    const eventTarget = event.target;
    const eventPath = event.path[0].tagName;
    if ( eventPath === 'LI' ) {
      eventTarget.style.background = '#9b5319';
      if ( this.elementsli && eventTarget !== this.elementsli ) {
        this.elementsli.style.background = '#db7c2f';
      }
      this.elementsli = eventTarget;
      return;
    }
    if ( eventTarget !== this.elements && this.elements) { this.base = 0; }
    this.sidebar_div( eventTarget );
    this.elements = eventTarget;
  }

  sidebar_div( eventTarget: any ) {
    const show01 = eventTarget.nextElementSibling;                  // 获取当前元素的的下一个兄弟元素 ul
    const parent01 = eventTarget.parentNode.parentNode;             // 获取当前元素的父元素 => 的父元素 => 的父元素 ul
    const parentChildren01 = parent01.children;                     // 获取当前元素的父元素 => 的父元素 => 的父元素下的所有 li
    const img01 = eventTarget.querySelectorAll('img')[1];           // 获取兄弟元素 img 小箭头
    const height = this.getULHeight(show01);
    this.listStatus(parentChildren01, img01, show01, height);
    if ( eventTarget !== this.elements && this.elements ) {
      this.elements.parentNode.querySelectorAll('img')[1].style.transform = 'rotate(0deg)';
    }
  }

  getULHeight(Elements) {
    const brother =  Elements.querySelector('ul');
    return getComputedStyle(brother).height;
  }

  listStatus(parentChildren, img, show, height) {
    for ( const UL of parentChildren) {
      const ul = UL.querySelector('ul');
      ul.style.height = '0';
      img.style.transform = 'rotate(0deg)';
    }
    // 判断  on || off
    switch ( this.base ) {
      case 0:
        this.base++;
        show.style.height = height;
        img.style.transform = 'rotate(90deg)';
        break;
      case 1:
        this.base = 0;
        show.style.height = '0';
        img.style.transform = 'rotate(0deg)';
        break;
    }
  }






  articlelist() {
    this.router.navigate(['main/list']);
  }



}
