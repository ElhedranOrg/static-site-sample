import 'source-map-support';
import * as Core from '@aws-cdk/core';
import * as Static from '@elhedranorg/cdk-static-site';
import * as path from 'path';

const app = new Core.App({
    context: {
        envTag: process.env.ENVIRONMENT || 'DEV'
    }
});

const envTag = app.node.tryGetContext('envTag');
const name = `devopssample${envTag}`;
const zoneDomain = 'elhedran.com';
const siteDomain = `${name.toLowerCase()}.${zoneDomain}`;

const stack = new Core.Stack(app, name, {
    env: {
        account: '057191276549',
        region: 'us-east-1'
    }
});

new Static.StaticSite(stack, 'site', {
    zoneDomain,
    siteDomain,
    siteName: `${name}-site`,
    assetPath: path.resolve('assets', 'site')
});

new Core.CfnOutput(stack, 'site-output', {
    exportName: `${name}-siteDomain`,
    value: siteDomain
});

app.node.applyAspect(new Core.Tag("PURPOSE", "demo"));