import 'source-map-support';
import * as Core from '@aws-cdk/core';
import * as Static from '@elhedranorg/cdk-static-site';
import * as path from 'path';

const app = new Core.App();

class MainStack extends Core.Stack {
    constructor(scope: Core.Construct, id: string, props?: Core.StackProps) {
        super(scope, id, props);

        new Static.StaticSite(this, 'site', {
            zoneDomain: 'elhedran.com',
            siteDomain: 'devopssample.elhedran.com',
            siteName: 'devops-sample-site',
            assetPath: path.resolve('assets', 'site')
        });
    }
}

new MainStack(app, 'devops-sample', {
    env: {
        account: '057191276549',
        region: 'us-east-1'
    }
});