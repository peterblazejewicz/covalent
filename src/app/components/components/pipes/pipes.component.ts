import { Component } from '@angular/core';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdAnchor } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TdDigitsPipe, TdBytesPipe, TdTimeAgoPipe, TdTimeDifferencePipe } from '../../../../platform/core';

import { TdHighlightComponent } from '../../../../platform/highlight';

@Component({
  directives: [
    MD_CARD_DIRECTIVES,
    MdIcon,
    MdAnchor,
    MD_LIST_DIRECTIVES,
    TdHighlightComponent,
  ],
  moduleId: module.id,
  pipes: [ TdDigitsPipe, TdBytesPipe, TdTimeAgoPipe, TdTimeDifferencePipe ],
  selector: 'td-pipes',
  styleUrls: [ 'pipes.component.css' ],
  templateUrl: 'pipes.component.html',
})

export class PipesComponent {

  public logs: Object[] = [
    {
      bytes: 72452903343,
      digits: 0.03243,
      precision: 3,
      reference: '2016-06-17 12:59:59',
      timestamp: '2016-01-29 17:59:59',
      timestampend: '2016-01-29 18:59:59',
    }, {
      bytes: 32452341,
      digits: 3.975086,
      precision: 4,
      reference: new Date(2016, 4, 17),
      timestamp: '2016-06-10 17:59:59',
      timestampend: '2016-11-29 18:59:59',
    }, {
      bytes: 4521903343000,
      digits: 4521,
      reference: new Date(2016, 4, 17).getTime(),
      timestamp: '2016-06-17 12:59:59',
      timestampend: '2016-06-17 13:00:00',
    }, {
      bytes: '5234190486500000',
      digits: '523468.86',
      reference: 'invalid',
      timestamp: '2016-06-17 12:59:59',
      timestampend: '2016-06-18 13:00:00',
    }, {
      bytes: 'Invalid Number',
      digits: 'Invalid Number',
      timestamp: '2016-06-17 12:59:59',
      timestampend: '2016-06-20 13:00:00',
    }, {
      bytes: 3245234190334370000,
      digits: 3245234,
      timestamp: new Date(2016, 4, 17),
      timestampend: '2016-06-20 13:00:00',
    }, {
      bytes: 3245234190334324400000,
      digits: 3245234100.6,
      timestamp: new Date(2016, 4, 17).getTime(),
      timestampend: '2016-06-20 13:00:00',
    }, {
      bytes: 3245234190334300000000000,
      digits: 3245234190076.9,
      timestamp: 'invalid',
      timestampend: '2016-06-20 13:00:00',
    },
 ];
}
