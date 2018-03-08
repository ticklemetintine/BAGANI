import {
    Component,
    OnInit,
    ElementRef,
    ViewChild,
    Renderer2,
    Output,
    EventEmitter,
    ChangeDetectionStrategy
} from '@angular/core';

@Component({
    selector: 'app-sansinukob-map',
    templateUrl: './sansinukob-map.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SansinukobMapComponent implements OnInit {
    private highlightClan: string;

    private sansinukobClan: any;
    private clans: any[];

    private parentMapHeight = 714;
    private parentMapWidth = 742;

    private mapTradedefaultCoordinates = [
// tslint:disable-next-line:max-line-length
        164, 210, 142, 200, 144, 177, 151, 168, 159, 168, 175, 148, 191, 131, 214, 119, 219, 112, 210, 102, 201, 91, 199, 59, 205, 56, 214, 58, 224, 66, 237, 73, 250, 84, 261, 92, 271, 98, 279, 99, 298, 98, 321, 107, 352, 123, 384, 164, 401, 183, 405, 217, 407, 239, 412, 253, 412, 278, 408, 298, 412, 309, 403, 317, 388, 332, 375, 332, 356, 317, 339, 301, 328, 291, 311, 290, 290, 299, 277, 310, 258, 325, 241, 326, 228, 327, 215, 329, 201, 332, 192, 321, 195, 304, 206, 296, 216, 287, 227, 279, 245, 265, 254, 253, 256, 237, 238, 233, 223, 230, 213, 234, 211, 248, 200, 257, 186, 262, 172, 263, 152, 265, 141, 268, 137, 261, 158, 240, 166, 226, 166, 218
    ];
    private mapDesertdefaultCoordinates = [
// tslint:disable-next-line:max-line-length
        313, 102, 325, 97, 342, 92, 360, 67, 373, 36, 390, 24, 401, 27, 419, 31, 439, 38, 454, 44, 461, 55, 467, 63, 480, 58, 493, 51, 517, 52, 529, 61, 549, 74, 549, 89, 547, 101, 556, 110, 567, 110, 584, 102, 596, 100, 606, 107, 611, 123, 624, 142, 618, 161, 607, 175, 609, 189, 613, 199, 630, 204, 642, 202, 659, 204, 670, 213, 674, 229, 664, 241, 645, 242, 627, 245, 607, 248, 594, 244, 589, 235, 580, 248, 569, 255, 551, 246, 533, 235, 523, 231, 491, 214, 478, 215, 465, 217, 446, 212, 430, 207, 407, 202, 398, 182, 389, 167, 377, 153, 363, 138, 353, 121, 338, 113
    ];
    private mapFarmdefaultCoordinates = [
// tslint:disable-next-line:max-line-length
        403, 203, 405, 219, 408, 238, 413, 265, 414, 291, 426, 294, 460, 300, 481, 312, 489, 323, 500, 336, 516, 346, 529, 361, 548, 369, 558, 370, 571, 373, 594, 376, 613, 397, 634, 408, 648, 395, 637, 378, 635, 361, 656, 348, 673, 323, 679, 315, 661, 316, 631, 319, 606, 316, 582, 311, 559, 294, 571, 289, 589, 295, 612, 296, 629, 290, 646, 282, 657, 272, 633, 268, 610, 265, 591, 260, 568, 251, 541, 237, 520, 231, 500, 220, 488, 216, 440, 207
    ];
    private mapForestdefaultCoordinates = [
// tslint:disable-next-line:max-line-length
        414, 291, 413, 303, 412, 313, 393, 330, 373, 334, 364, 348, 335, 352, 311, 355, 297, 364, 299, 377, 305, 386, 340, 391, 338, 404, 326, 423, 317, 438, 336, 438, 359, 429, 359, 454, 372, 456, 393, 440, 412, 422, 424, 421, 433, 428, 434, 439, 445, 435, 453, 424, 466, 421, 487, 413, 490, 403, 497, 396, 517, 395, 534, 388, 549, 374, 529, 359, 513, 339, 493, 329, 483, 313, 457, 300
    ];
    private mapFishingdefaultCoordinates = [
// tslint:disable-next-line:max-line-length
        613, 549, 615, 535, 604, 531, 596, 536, 593, 544, 546, 532, 545, 520, 539, 507, 522, 499, 514, 494, 517, 483, 521, 471, 510, 460, 509, 435, 497, 424, 486, 417, 479, 415, 458, 420, 453, 426, 443, 433, 435, 438, 430, 429, 422, 431, 421, 442, 415, 450, 415, 472, 407, 481, 391, 457, 375, 454, 359, 453, 345, 460, 329, 464, 317, 450, 295, 444, 284, 455, 275, 474, 276, 491, 281, 506, 282, 521, 273, 531, 272, 538, 281, 549, 260, 546, 230, 552, 216, 564, 189, 574, 156, 589, 147, 598, 162, 620, 196, 631, 235, 649, 285, 649, 342, 653, 405, 630, 430, 601, 441, 581, 476, 573, 483, 550, 490, 528, 502, 553, 532, 552, 546, 541, 592, 550, 603, 556
    ];

    @ViewChild('sansinukobMap', {
        read: ElementRef
    }) sansinukobMap: ElementRef;
    @ViewChild('mapTrade', {
        read: ElementRef
    }) mapTrade: ElementRef;
    @ViewChild('mapDesert', {
        read: ElementRef
    }) mapDesert: ElementRef;
    @ViewChild('mapFarm', {
        read: ElementRef
    }) mapFarm: ElementRef;
    @ViewChild('mapForest', {
        read: ElementRef
    }) mapForest: ElementRef;
    @ViewChild('mapFishing', {
        read: ElementRef
    }) mapFishing: ElementRef;

    @ViewChild('mapFocusTrade', {
        read: ElementRef
    }) mapFocusTrade: ElementRef;
    @ViewChild('mapFocusDesert', {
        read: ElementRef
    }) mapFocusDesert: ElementRef;
    @ViewChild('mapFocusFarm', {
        read: ElementRef
    }) mapFocusFarm: ElementRef;
    @ViewChild('mapFocusForest', {
        read: ElementRef
    }) mapFocusForest: ElementRef;
    @ViewChild('mapFocusFishing', {
        read: ElementRef
    }) mapFocusFishing: ElementRef;

    @Output('mapFarmlick') mapFarmlick: EventEmitter < string > = new EventEmitter();

    constructor(
        private renderer: Renderer2
    ) {}

    ngOnInit() {
        this.renderer.setAttribute(
            this.mapTrade.nativeElement, 
            'coords', 
            this.chunkArray(this.mapTradedefaultCoordinates, 2).join(',')
        );
        this.renderer.setAttribute(
            this.mapDesert.nativeElement, 
            'coords', 
            this.chunkArray(this.mapDesertdefaultCoordinates, 2).join(',')
        );
        this.renderer.setAttribute(
            this.mapFarm.nativeElement, 
            'coords', 
            this.chunkArray(this.mapFarmdefaultCoordinates, 2).join(',')
        );
        this.renderer.setAttribute(
            this.mapForest.nativeElement, 
            'coords', 
            this.chunkArray(this.mapForestdefaultCoordinates, 2).join(',')
        );
        this.renderer.setAttribute(
            this.mapFishing.nativeElement, 
            'coords', 
            this.chunkArray(this.mapFishingdefaultCoordinates, 2).join(',')
        );

        this.sansinukobClan = {
            'trade': {
                'el': this.mapFocusTrade.nativeElement,
                'definition': {
                    defaultW: 319,
                    defaultH: 314,
                    defaultTop: 50,
                    defaultLeft: 132
                }
            },
            'desert': {
                'el': this.mapFocusDesert.nativeElement,
                'definition': {
                    defaultW: 390,
                    defaultH: 257,
                    defaultTop: 20,
                    defaultLeft: 327
                }
            },
            'farm': {
                'el': this.mapFocusFarm.nativeElement,
                'definition': {
                    defaultW: 319,
                    defaultH: 243,
                    defaultTop: 200,
                    defaultLeft: 403
                }
            },
            'forest': {
                'el': this.mapFocusForest.nativeElement,
                'definition': {
                    defaultW: 286,
                    defaultH: 214,
                    defaultTop: 278,
                    defaultLeft: 298
                }
            },
            'fishing': {
                'el': this.mapFocusFishing.nativeElement,
                'definition': {
                    defaultW: 500,
                    defaultH: 265,
                    defaultTop: 421,
                    defaultLeft: 159
                }
            }
        };
    }

    onResize($event) {
        let tmp;
        tmp = this.recomputeMap(
            this.mapTradedefaultCoordinates
        ).join(',');
        this.renderer.setAttribute(this.mapTrade.nativeElement, 'coords', tmp);

        tmp = this.recomputeMap(
            this.mapForestdefaultCoordinates
        ).join(',');
        this.renderer.setAttribute(this.mapForest.nativeElement, 'coords', tmp);

        tmp = this.recomputeMap(
            this.mapFarmdefaultCoordinates
        ).join(',');
        this.renderer.setAttribute(this.mapFarm.nativeElement, 'coords', tmp);

        tmp = this.recomputeMap(
            this.mapForestdefaultCoordinates
        ).join(',');
        this.renderer.setAttribute(this.mapForest.nativeElement, 'coords', tmp);

        tmp = this.recomputeMap(
            this.mapFishingdefaultCoordinates
        ).join(',');
        this.renderer.setAttribute(this.mapFishing.nativeElement, 'coords', tmp);

        this.watchMap();
    }

    focusMap(highlightClan) {
        this.highlightClan = highlightClan;
        this.watchMap();
    }

    showModal($clan: string) {
        this.mapFarmlick.emit($clan);
    }

    /**
     * Private Methods
     *
     */
    watchMap() {
        const defaultW = 0;
        const defaultH = 0;
        const defaultTop = 0;
        const defaultLeft = 0;

        const clan = this.sansinukobClan[this.highlightClan];
        // get perc
        const percWidth = ((this.parentMapWidth - (this.sansinukobMap.nativeElement.offsetWidth)) / this.parentMapWidth);

        // set top and left
        const newLeft = (clan.definition.defaultLeft / this.parentMapWidth) * this.sansinukobMap.nativeElement.offsetWidth;
        const newTop = (clan.definition.defaultTop / this.parentMapHeight) * this.sansinukobMap.nativeElement.offsetHeight;

        this.renderer.setStyle(clan.el, 'width', (clan.definition.defaultW - (clan.definition.defaultW * percWidth)) + 'px');
        this.renderer.setStyle(clan.el, 'left', newLeft + 'px');
        this.renderer.setStyle(clan.el, 'top', newTop + 'px');
    }

    private chunkArray(myarray: any[], chunkSize: number): any[] {
        const _array = Object.assign([], myarray);
        const results = [];

        while (_array.length) {
            results.push(_array.splice(0, chunkSize));
        }

        return results;
    }

    private recomputeMap(defaultCoordinate: any[]): any[] {
        const _defCoordinate = this.chunkArray(defaultCoordinate, 2);

        const newCoordinate = [];

        const width = this.sansinukobMap.nativeElement.offsetWidth;
        const height = this.sansinukobMap.nativeElement.offsetHeight;

        for (let i = 0; i < _defCoordinate.length; i++) {

            const _perc_w_old = _defCoordinate[i][0] / this.parentMapWidth;
            const _perc_h_old = _defCoordinate[i][1] / this.parentMapHeight;

            newCoordinate.push(
                width * _perc_w_old,
                height * _perc_h_old,
            );
        }
        return newCoordinate;
    }
}
