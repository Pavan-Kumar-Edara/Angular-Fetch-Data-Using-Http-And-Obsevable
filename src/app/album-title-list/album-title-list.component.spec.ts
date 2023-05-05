import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumTitleListComponent } from './album-title-list.component';

describe('AlbumTitleListComponent', () => {
  let component: AlbumTitleListComponent;
  let fixture: ComponentFixture<AlbumTitleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumTitleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumTitleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
