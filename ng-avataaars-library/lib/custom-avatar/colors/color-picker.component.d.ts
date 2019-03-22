import { EventEmitter } from '@angular/core';
export declare class CustomAvatarColorPickerComponent {
    title: string;
    currentColor: string;
    colors: {
        value: string;
        label: any;
    }[];
    colorConverter: (value: string) => string;
    colorPicked: EventEmitter<string>;
    pick(value: string): void;
}
