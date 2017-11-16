// Copyright 2016 Documize Inc. <legal@documize.com>. All rights reserved.
//
// This software (Documize Community Edition) is licensed under
// GNU AGPL v3 http://www.gnu.org/licenses/agpl-3.0.en.html
//
// You can operate outside the AGPL restrictions by purchasing
// Documize Enterprise Edition and obtaining a commercial license
// by contacting <sales@documize.com>.
//
// https://documize.com

import Component from '@ember/component';

import { inject as service } from '@ember/service';
import NotifierMixin from '../../mixins/notifier';

export default Component.extend(NotifierMixin, {
    appMeta :service(),

    didRender() {
        if (this.get('appMeta').invalidLicense()) {
            this.showNotification(`!! Expired or invalid license !!`);
        }
    }
});
