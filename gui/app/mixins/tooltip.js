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

import Mixin from '@ember/object/mixin';

export default Mixin.create({
    tooltips: [],

    addTooltip(elem) {
        if (elem == null) {
            return;
		}

        let t = new Tooltip({
            target: elem
        });

        let tt = this.get('tooltips');
		tt.push(t);

		return t;
    },

	destroyTooltip(t) {
		t.destroy();
    },

    destroyTooltips() {
		if (this.get('isDestroyed') || this.get('isDestroying')) {
			return;
		}

		let tt = this.get('tooltips');

        tt.forEach(t => {
			t.destroy();
        });

        tt.length = 0;

        this.set('tooltips', tt);
    }
});
