import test from 'ava';
import { SologenicError } from '../lib/error';
test.serial('check for duplicate error ids and messages', async function (t) {
    let errorCodes = SologenicError.getErrorCodes();
    for (var i in errorCodes) {
        let errorId = SologenicError.getErrorCodeByMessage(errorCodes[i].message);
        let message = SologenicError.getErrorCodeById(errorCodes[i].id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3Iuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy90ZXN0cy9lcnJvci5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sSUFBSSxNQUFNLEtBQUssQ0FBQztBQUN2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsNENBQTRDLEVBQUUsS0FBSyxXQUFVLENBQUM7SUFDdEUsSUFBSSxVQUFVLEdBQUcsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBRWhELEtBQUssSUFBSSxDQUFDLElBQUksVUFBVSxFQUFFO1FBQ3RCLElBQUksT0FBTyxHQUFHLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUUsSUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUVoRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztRQUVwQyxNQUFNLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDMUIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRWQsS0FBSyxJQUFJLEtBQUssSUFBSSxVQUFVLEVBQUU7Z0JBQzFCLElBQUksVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsSUFBSSxPQUFPLEVBQUU7b0JBQ2pDLEtBQUssRUFBRSxDQUFDO2lCQUNYO2FBQ0o7WUFFRCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVMsS0FBSztZQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQztRQUVILE1BQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUMxQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7WUFFZCxLQUFLLElBQUksS0FBSyxJQUFJLFVBQVUsRUFBRTtnQkFDMUIsSUFBSSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sRUFBRTtvQkFDdEMsS0FBSyxFQUFFLENBQUM7aUJBQ1g7YUFDSjtZQUVELE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO1lBQ2xCLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDO0tBQ047QUFDTCxDQUFDLENBQUMsQ0FBQyJ9