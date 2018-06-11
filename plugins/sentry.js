import Vue from 'vue';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('https://639cb43dc5df4b409a77859580cb375e@sentry.io/1223141')
    .addPlugin(RavenVue, Vue)
    .install();
