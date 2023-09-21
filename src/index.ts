import 'react-native-polyfill';
import 'core-js/actual/url';

import { PrismaClient } from '@prisma/client/edge.js';

class TestCase {
    public internal = new PrismaClient({ log: [{ level: 'query', emit: 'event' }] });

    constructor () {
        const test = this.internal.user.findFirst();

        test.catch((e) => console.error(e));
    }
}

new TestCase();