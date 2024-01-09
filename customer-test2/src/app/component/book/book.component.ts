import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css'
})
export class BookComponent implements AfterViewInit {

  title: string = 'Toi'


  ngAfterViewInit(): void {
    this.title = 'Angualr'
  }

}
