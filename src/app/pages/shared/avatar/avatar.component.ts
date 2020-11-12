import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector: 'app-avatar',
    templateUrl: 'avatar.component.html',
  })
  export class AvatarComponent implements  OnInit, OnChanges {
    @Input()
    public round = true;
    @Input()
    public size = 50;
    @Input()
    public textSizeRatio = 3;
    @Input()
    public bgColor: string | undefined;
    @Input()
    public fgColor = '#FFF';
    @Input()
    public borderColor: string | undefined;
    @Input()
    public style: any = {};
    @Input()
    public cornerRadius = 0;

    @Input('name')
    public name: string | null;

    public isAlive = true;
    public avatarText: string | null = null;
    public avatarStyle: any = {};
    public hostStyle: any = {};

    avatarColors = [
      '#1abc9c',
      '#3498db',
      '#f1c40f',
      '#8e44ad',
      '#ef7473',
      '#bd4b00',
      '#2c3e50',
      '#7f8c8d'
    ];

      
    constructor() {}

    ngOnInit(): void {
      this.buildAvatar();
    }

    public ngOnChanges(changes: SimpleChanges): void {     
      this.buildAvatar();
    }  

    private buildAvatar(): void {
      this.avatarText = this.getInitials();
      this.avatarStyle = this.getInitialsStyle();

      this.hostStyle = {
        width: this.size + 'px',
        height: this.size + 'px'
      };
    }

    private getInitials(): string {
      const name = this.name.trim();
  
      if (!name) {
        return '';
      }
  
      const initials = name.split(' ');

      if (!initials || !initials.length) {
        return '';
      }
  
      return initials
        .filter(element => element && element.length > 0)
        .map(element => element[0].toUpperCase())
        .join('')
        .substring(0, 2);
    }
  
  
    private getInitialsStyle(): void {
      return {
        textAlign: 'center',
        borderRadius: this.round ? '100%' : this.cornerRadius + 'px',
        border: this.borderColor ? '1px solid ' + this.borderColor : '',
        textTransform: 'uppercase',
        color: this.fgColor,
        backgroundColor: this.bgColor
          ? this.bgColor
          : this.getRandomColor(),
        font:
          Math.floor(this.size / this.textSizeRatio) +
          'px Montserrat, sans-serif',
        lineHeight: this.size + 'px',
        ...this.style
      };
    } 
    
    private getRandomColor(): string {
      if (!this.avatarText) {
        return 'transparent';
      }
      const asciiCodeSum = this.calculateAsciiCode(this.avatarText);
      return this.avatarColors[asciiCodeSum % this.avatarColors.length];
    }

    private calculateAsciiCode(value: string): number {
      return value
        .split('')
        .map(letter => letter.charCodeAt(0))
        .reduce((previous, current) => previous + current);
    }
}