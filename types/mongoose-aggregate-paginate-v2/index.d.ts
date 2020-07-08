// Type definitions for mongoose-aggregate-paginate-v2 1.0
// Project: https://github.com/aravindnc/mongoose-aggregate-paginate-v2#readme
// Definitions by: MadMatt <https://github.com/knyuwork>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */

import { Schema } from 'mongoose';

declare function aggregatePaginate(schema: Schema): void;

export default aggregatePaginate;
