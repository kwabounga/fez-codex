import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { TabletComponent } from './tablet/tablet.component';
import { TranslatorComponent } from './translator/translator.component';
import { AnticKeyboardComponent } from './antic-keyboard/antic-keyboard.component';
import { CodexComponent } from './codex/codex.component';
import { LetterComponent } from './letter/letter.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { ScreenComponent } from './screen/screen.component';
import { WordComponent } from './word/word.component';
import { WallTabsComponent } from './wall-tabs/wall-tabs.component';
import { SpaceTimeRiftComponent } from './space-time-rift/space-time-rift.component';
import { ConsoleSwapperComponent } from './console-swapper/console-swapper.component';
import { MessageNoteComponent } from './message-note/message-note.component';
import { HypercubeComponent } from './hypercube/hypercube.component';
import { ScreenGlyphComponent } from './screen-glyph/screen-glyph.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TabletComponent,
    TranslatorComponent,
    AnticKeyboardComponent,
    CodexComponent,
    LetterComponent,
    KeyboardComponent,
    ScreenComponent,
    WordComponent,
    WallTabsComponent,
    SpaceTimeRiftComponent,
    ConsoleSwapperComponent,
    MessageNoteComponent,
    HypercubeComponent,
    ScreenGlyphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
