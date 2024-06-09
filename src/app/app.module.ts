import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { TabletComponent } from './tablet/tablet.component';
import { TranslatorComponent } from './translator/translator.component';
import { AnticKeyboardComponent } from './antic-keyboard/antic-keyboard.component';
import { CodexComponent } from './codex/codex.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TabletComponent,
    TranslatorComponent,
    AnticKeyboardComponent,
    CodexComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
