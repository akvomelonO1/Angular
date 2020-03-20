import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginComponentComponent } from './loggin-component.component';

describe('LogginComponentComponent', () => {
  let component: LogginComponentComponent;
  let fixture: ComponentFixture<LogginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
