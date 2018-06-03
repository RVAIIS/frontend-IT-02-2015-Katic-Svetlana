import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgracDialogComponent } from './igrac-dialog.component';

describe('IgracDialogComponent', () => {
  let component: IgracDialogComponent;
  let fixture: ComponentFixture<IgracDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgracDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgracDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
