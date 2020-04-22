import 'source-map-support';
import * as Core from '@aws-cdk/core';
import * as Static from '@elhedranorg/cdk-static-site';

const app = new Core.App();
const siteName = 'devopssample';

class MainStack extends Core.Stack {
    constructor(scope: Core.Construct, id: string, props?: Core.StackProps) {
        super(scope, id, props);

        new Static.StaticSite(this, 'site', {
            zoneDomain: 'elhedran.com',
            siteDomain: 'devopssample.elhedran.com',
            siteName
        });
    }
}

new MainStack(app, 'sample-stack', {
    env: {
        account: '057191276549',
        region: 'us-east-1'
    }
});