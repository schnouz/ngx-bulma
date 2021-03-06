import { Directive, HostBinding, OnChanges, Input, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[buSmall]'
})
export class SmallDirective {
    @HostBinding('class.is-small') private isSmall: boolean;
    
    @Input() set buSmall(value: boolean) {
        this.isSmall = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buNormal]'
})
export class NormalDirective {
    @HostBinding('class.is-normal') private isNormal: boolean;
    
    @Input() set buNormal(value: boolean) {
        this.isNormal = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buMedium]'
})
export class MediumDirective {
    @HostBinding('class.is-medium') private isMedium: boolean;
    
    @Input() set buMedium(value: boolean) {
        this.isMedium = (value !== undefined && value !== false);
    }
}

@Directive({
    selector: '[buLarge]'
})
export class LargeDirective {
    @HostBinding('class.is-large') private isLarge: boolean;
    
    @Input() set buLarge(value: boolean) {
        this.isLarge = (value !== undefined && value !== false);
    }
}
