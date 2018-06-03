import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NacionalnostDialogComponent } from './nacionalnost-dialog.component';

describe('NacionalnostDialogComponent', () => {
  let component: NacionalnostDialogComponent;
  let fixture: ComponentFixture<NacionalnostDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NacionalnostDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NacionalnostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
