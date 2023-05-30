"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = __importDefault(require("ava"));
const error_1 = require("../lib/error");
ava_1.default.serial('check for duplicate error ids and messages', async function (t) {
    let errorCodes = error_1.SologenicError.getErrorCodes();
    for (var i in errorCodes) {
        let errorId = error_1.SologenicError.getErrorCodeByMessage(errorCodes[i].message);
        let message = error_1.SologenicError.getErrorCodeById(errorCodes[i].id);
        t.true(typeof (errorId) == 'string');
        t.true(typeof (message) == 'string');
        await new Promise((resolve) => {
            let count = 0;
            for (var index in errorCodes) {
                if (errorCodes[index].id == errorId) {
                    count++;
                }
            }
            resolve(count);
        }).then(function (value) {
            t.is(value, 1);
        });
        await new Promise((resolve) => {
            let count = 0;
            for (var index in errorCodes) {
                if (errorCodes[index].message == message) {
                    count++;
                }
            }
            resolve(count);
        }).then(function (value) {
            t.is(value, 1);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9lcnJvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdDQUE4QztBQUU5QyxhQUFJLENBQUMsTUFBTSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssV0FBVSxDQUFDO0lBQ3RFLElBQUksVUFBVSxHQUFHLHNCQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFaEQsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUU7UUFDdEIsSUFBSSxPQUFPLEdBQUcsc0JBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBSSxPQUFPLEdBQUcsc0JBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFaEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFNLENBQUMsT0FBTyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUM7UUFFcEMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVkLEtBQUssSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO2dCQUMxQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksT0FBTyxFQUFFO29CQUNqQyxLQUFLLEVBQUUsQ0FBQztpQkFDWDthQUNKO1lBRUQsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFTLEtBQUs7WUFDbEIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsS0FBSyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7Z0JBQzFCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUU7b0JBQ3RDLEtBQUssRUFBRSxDQUFDO2lCQUNYO2FBQ0o7WUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztLQUNOO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==