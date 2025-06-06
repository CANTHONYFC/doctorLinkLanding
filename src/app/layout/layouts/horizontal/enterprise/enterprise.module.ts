import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyMenuModule as MatMenuModule} from '@angular/material/legacy-menu';
import {FuseFullscreenModule} from '@fuse/components/fullscreen';
import {FuseLoadingBarModule} from '@fuse/components/loading-bar';
import {FuseNavigationModule} from '@fuse/components/navigation';
import {LanguagesModule} from 'app/layout/common/languages/languages.module';
import {MessagesModule} from 'app/layout/common/messages/messages.module';
import {NotificationsModule} from 'app/layout/common/notifications/notifications.module';
import {QuickChatModule} from 'app/layout/common/quick-chat/quick-chat.module';
import {SearchModule} from 'app/layout/common/search/search.module';
import {ShortcutsModule} from 'app/layout/common/shortcuts/shortcuts.module';
import {UserModule} from 'app/layout/common/user/user.module';
import {SharedModule} from 'app/shared/shared.module';
import {EnterpriseLayoutComponent} from 'app/layout/layouts/horizontal/enterprise/enterprise.component';
import {MatLegacyOptionModule} from "@angular/material/legacy-core";
import {MatLegacySelectModule} from "@angular/material/legacy-select";

@NgModule({
    declarations: [
        EnterpriseLayoutComponent
    ],
    imports: [
        HttpClientModule,
        RouterModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        FuseFullscreenModule,
        FuseLoadingBarModule,
        FuseNavigationModule,
        LanguagesModule,
        MessagesModule,
        NotificationsModule,
        QuickChatModule,
        SearchModule,
        ShortcutsModule,
        UserModule,
        SharedModule,
        MatLegacyOptionModule,
        MatLegacySelectModule,
    ],
    exports: [
        EnterpriseLayoutComponent
    ]
})
export class EnterpriseLayoutModule {
}
