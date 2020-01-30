[typescript](../README.md) › [Globals](../globals.md) › [ServerInfoResponse](serverinforesponse.md)

# Interface: ServerInfoResponse

## Hierarchy

* **ServerInfoResponse**

## Index

### Properties

* [info](serverinforesponse.md#info)

## Properties

###  info

• **info**: *object*

Defined in node_modules/ripple-lib/dist/npm/common/types/commands/server_info.d.ts:5

#### Type declaration:

* **amendment_blocked**? : *undefined | false | true*

* **build_version**: *string*

* **closed_ledger**? : *[LedgerInfo](ledgerinfo.md)*

* **complete_ledgers**: *string*

* **hostid**: *string*

* **io_latency_ms**: *number*

* **last_close**(): *object*

  * **converge_time_s**: *number*

  * **proposers**: *number*

* **load**? : *undefined | object*

* **load_factor**: *number*

* **load_factor_cluster**? : *undefined | number*

* **load_factor_fee_escalation**? : *undefined | number*

* **load_factor_fee_queue**? : *undefined | number*

* **load_factor_local**? : *undefined | number*

* **load_factor_net**? : *undefined | number*

* **load_factor_server**? : *undefined | number*

* **peers**: *number*

* **pubkey_node**: *string*

* **pubkey_validator**: *string*

* **server_state**: *string*

* **state_accounting**: *any*

* **uptime**: *number*

* **validated_ledger**? : *[LedgerInfo](ledgerinfo.md)*

* **validation_quorum**: *number*

* **validator_list_expires**: *string*
