import { Component, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.scss',
})
export class Toggle {
  @Input() isOpen = false;
  @Output() toggle = new EventEmitter<void>();

  onToggle(){
    this.toggle.emit();
  }

  // Versao antiga 
  // isMenuOpen = false;

  // toggleMenu(){
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  // closeMenu(){
  //   this.isMenuOpen = false;
  // }
}
