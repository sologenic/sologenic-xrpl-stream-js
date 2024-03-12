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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9lcnJvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsOENBQXVCO0FBQ3ZCLHdDQUE4QztBQUU5QyxhQUFJLENBQUMsTUFBTSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssV0FBVSxDQUFDO0lBQ3RFLElBQUksVUFBVSxHQUFHLHNCQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7SUFFaEQsS0FBSyxJQUFJLENBQUMsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUN2QixJQUFJLE9BQU8sR0FBRyxzQkFBYyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMxRSxJQUFJLE9BQU8sR0FBRyxzQkFBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUVwQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsS0FBSyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxJQUFJLE9BQU8sRUFBRSxDQUFDO29CQUNsQyxLQUFLLEVBQUUsQ0FBQztnQkFDWixDQUFDO1lBQ0wsQ0FBQztZQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO1FBRUgsTUFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUVkLEtBQUssSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFLENBQUM7Z0JBQzNCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztvQkFDdkMsS0FBSyxFQUFFLENBQUM7Z0JBQ1osQ0FBQztZQUNMLENBQUM7WUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9