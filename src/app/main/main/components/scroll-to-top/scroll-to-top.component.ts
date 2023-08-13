import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Ripple,
  initTE,
} from "tw-elements";

@Component({
  selector: 'tmp-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent {
  ngOnInit() {
    initTE({ Ripple });

    const mybutton = document.getElementById("btn-back-to-top") || null

    // When the user scrolls down 120px from the top of the document, show the button
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        mybutton?.classList.remove("hidden");
      } else {
        mybutton?.classList.add("hidden");
      }
    };
    const backToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    mybutton?.addEventListener("click", backToTop);
    window.addEventListener("scroll", scrollFunction);
  }
}
