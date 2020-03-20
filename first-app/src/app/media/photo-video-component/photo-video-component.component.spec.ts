import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoVideoComponentComponent } from './photo-video-component.component';

describe('PhotoVideoComponentComponent', () => {
  let component: PhotoVideoComponentComponent;
  let fixture: ComponentFixture<PhotoVideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
