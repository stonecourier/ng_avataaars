import { EventEmitter } from '@angular/core';
export declare class CustomAvatarIconBaseComponent {
    index: number;
    currentIndex: number;
    selectTab: EventEmitter<number>;
    readonly avatarTabFillColor: "black" | "gray";
    select(): void;
}
