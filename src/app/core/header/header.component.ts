import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  public navigateToAlbuns(): void {
    this.router.navigate(['albuns'], {
      replaceUrl: false,
    });
  }

  public navigateToCharacters(): void {
    this.router.navigate(['characters'], {
      replaceUrl: false,
    });
  }

  public navigateToTodo(): void {
    this.router.navigate(['todos'], {
      replaceUrl: false,
    });
  }

}
