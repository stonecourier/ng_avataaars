import { EventEmitter, TemplateRef, AfterContentInit } from '@angular/core';
export declare class CustomAvatarPickerComponent implements AfterContentInit {
    title: string;
    currentOption: string;
    options: {
        value: string;
        label: any;
    }[];
    backgroundColor: string;
    optionPicked: EventEmitter<string>;
    itemTemplate: TemplateRef<any>;
    templates: any;
    pick(value: string): void;
    ngAfterContentInit(): void;
}
