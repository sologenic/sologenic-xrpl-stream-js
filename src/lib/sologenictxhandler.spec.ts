/*
If you have problems running these test cases due to a SSL certificate
issue with the s.devnet.rippletest.net and the nodejs SSL CA bundle, run
the test cases with the environment variable:

$ NODE_TLS_REJECT_UNAUTHORIZED=0 npm run watch
*/

import anyTest, {TestInterface} from 'ava';

import { http, IFaucet } from './soloutils';

const test = anyTest as TestInterface<{
  handler: any,
  server: string,
  faucet: string,
  validAccount: any,
  invalidAccount: any,
  emptyAccount: any
}>;

import * as SologenicTypes from '../types';

import { SologenicTxHandler } from './sologenictxhandler';
import { SologenicError } from './error';

const NETWORK_LIST = {
  dev: {
    wss: 'wss://s.devnet.rippletest.net:51233',
    faucet: 'https://faucet.devnet.rippletest.net/accounts',
    certificates: [
`-----BEGIN CERTIFICATE-----
MIIENjCCAx6gAwIBAgIBATANBgkqhkiG9w0BAQUFADBvMQswCQYDVQQGEwJTRTEU
MBIGA1UEChMLQWRkVHJ1c3QgQUIxJjAkBgNVBAsTHUFkZFRydXN0IEV4dGVybmFs
IFRUUCBOZXR3b3JrMSIwIAYDVQQDExlBZGRUcnVzdCBFeHRlcm5hbCBDQSBSb290
MB4XDTAwMDUzMDEwNDgzOFoXDTIwMDUzMDEwNDgzOFowbzELMAkGA1UEBhMCU0Ux
FDASBgNVBAoTC0FkZFRydXN0IEFCMSYwJAYDVQQLEx1BZGRUcnVzdCBFeHRlcm5h
bCBUVFAgTmV0d29yazEiMCAGA1UEAxMZQWRkVHJ1c3QgRXh0ZXJuYWwgQ0EgUm9v
dDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALf3GjPm8gAELTngTlvt
H7xsD821+iO2zt6bETOXpClMfZOfvUq8k+0DGuOPz+VtUFrWlymUWoCwSXrbLpX9
uMq/NzgtHj6RQa1wVsfwTz/oMp50ysiQVOnGXw94nZpAPA6sYapeFI+eh6FqUNzX
mk6vBbOmcZSccbNQYArHE504B4YCqOmoaSYYkKtMsE8jqzpPhNjfzp/haW+710LX
a0Tkx63ubUFfclpxCDezeWWkWaCUN/cALw3CknLa0Dhy2xSoRcRdKn23tNbE7qzN
E0S3ySvdQwAl+mG5aWpYIxG3pzOPVnVZ9c0p10a3CitlttNCbxWyuHv77+ldU9U0
WicCAwEAAaOB3DCB2TAdBgNVHQ4EFgQUrb2YejS0Jvf6xCZU7wO94CTLVBowCwYD
VR0PBAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wgZkGA1UdIwSBkTCBjoAUrb2YejS0
Jvf6xCZU7wO94CTLVBqhc6RxMG8xCzAJBgNVBAYTAlNFMRQwEgYDVQQKEwtBZGRU
cnVzdCBBQjEmMCQGA1UECxMdQWRkVHJ1c3QgRXh0ZXJuYWwgVFRQIE5ldHdvcmsx
IjAgBgNVBAMTGUFkZFRydXN0IEV4dGVybmFsIENBIFJvb3SCAQEwDQYJKoZIhvcN
AQEFBQADggEBALCb4IUlwtYj4g+WBpKdQZic2YR5gdkeWxQHIzZlj7DYd7usQWxH
YINRsPkyPef89iYTx4AWpb9a/IfPeHmJIZriTAcKhjW88t5RxNKWt9x+Tu5w/Rw5
6wwCURQtjr0W4MHfRnXnJK3s9EK0hZNwEGe6nQY1ShjTK3rMUUKhemPR5ruhxSvC
Nr4TDea9Y355e6cJDUCrat2PisP29owaQgVR1EX1n6diIWgVIEM8med8vSTYqZEX
c4g/VhsxOBi0cQ+azcgOno4uG+GMmIPLHzHxREzGBHNJdmAPx/i9F4BrLunMTA5a
mnkPIAou1Z5jJh5VkpTYghdae9C8x49OhgQ=
-----END CERTIFICATE-----
`,
`-----BEGIN CERTIFICATE-----
MIIFdzCCBF+gAwIBAgIQE+oocFv07O0MNmMJgGFDNjANBgkqhkiG9w0BAQwFADBv
MQswCQYDVQQGEwJTRTEUMBIGA1UEChMLQWRkVHJ1c3QgQUIxJjAkBgNVBAsTHUFk
ZFRydXN0IEV4dGVybmFsIFRUUCBOZXR3b3JrMSIwIAYDVQQDExlBZGRUcnVzdCBF
eHRlcm5hbCBDQSBSb290MB4XDTAwMDUzMDEwNDgzOFoXDTIwMDUzMDEwNDgzOFow
gYgxCzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpOZXcgSmVyc2V5MRQwEgYDVQQHEwtK
ZXJzZXkgQ2l0eTEeMBwGA1UEChMVVGhlIFVTRVJUUlVTVCBOZXR3b3JrMS4wLAYD
VQQDEyVVU0VSVHJ1c3QgUlNBIENlcnRpZmljYXRpb24gQXV0aG9yaXR5MIICIjAN
BgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAgBJlFzYOw9sIs9CsVw127c0n00yt
UINh4qogTQktZAnczomfzD2p7PbPwdzx07HWezcoEStH2jnGvDoZtF+mvX2do2NC
tnbyqTsrkfjib9DsFiCQCT7i6HTJGLSR1GJk23+jBvGIGGqQIjy8/hPwhxR79uQf
jtTkUcYRZ0YIUcuGFFQ/vDP+fmyc/xadGL1RjjWmp2bIcmfbIWax1Jt4A8BQOujM
8Ny8nkz+rwWWNR9XWrf/zvk9tyy29lTdyOcSOk2uTIq3XJq0tyA9yn8iNK5+O2hm
AUTnAU5GU5szYPeUvlM3kHND8zLDU+/bqv50TmnHa4xgk97Exwzf4TKuzJM7UXiV
Z4vuPVb+DNBpDxsP8yUmazNt925H+nND5X4OpWaxKXwyhGNVicQNwZNUMBkTrNN9
N6frXTpsNVzbQdcS2qlJC9/YgIoJk2KOtWbPJYjNhLixP6Q5D9kCnusSTJV882sF
qV4Wg8y4Z+LoE53MW4LTTLPtW//e5XOsIzstAL81VXQJSdhJWBp/kjbmUZIO8yZ9
HE0XvMnsQybQv0FfQKlERPSZ51eHnlAfV1SoPv10Yy+xUGUJ5lhCLkMaTLTwJUdZ
+gQek9QmRkpQgbLevni3/GcV4clXhB4PY9bpYrrWX1Uu6lzGKAgEJTm4Diup8kyX
HAc/DVL17e8vgg8CAwEAAaOB9DCB8TAfBgNVHSMEGDAWgBStvZh6NLQm9/rEJlTv
A73gJMtUGjAdBgNVHQ4EFgQUU3m/WqorSs9UgOHYm8Cd8rIDZsswDgYDVR0PAQH/
BAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wEQYDVR0gBAowCDAGBgRVHSAAMEQGA1Ud
HwQ9MDswOaA3oDWGM2h0dHA6Ly9jcmwudXNlcnRydXN0LmNvbS9BZGRUcnVzdEV4
dGVybmFsQ0FSb290LmNybDA1BggrBgEFBQcBAQQpMCcwJQYIKwYBBQUHMAGGGWh0
dHA6Ly9vY3NwLnVzZXJ0cnVzdC5jb20wDQYJKoZIhvcNAQEMBQADggEBAJNl9jeD
lQ9ew4IcH9Z35zyKwKoJ8OkLJvHgwmp1ocd5yblSYMgpEg7wrQPWCcR23+WmgZWn
RtqCV6mVksW2jwMibDN3wXsyF24HzloUQToFJBv2FAY7qCUkDrvMKnXduXBBP3zQ
YzYhBx9G/2CkkeFnvN4ffhkUyWNnkepnB2u0j4vAbkN9w6GAbLIevFOFfdyQoaS8
Le9Gclc1Bb+7RrtubTeZtv8jkpHGbkD4jylW6l/VXxRTrPBPYer3IsynVgviuDQf
Jtl7GQVoP7o81DgGotPmjw7jtHFtQELFhLRAlSv0ZaBIefYdgWOWnU914Ph85I6p
0fKtirOMxyHNwu8=
-----END CERTIFICATE-----
`,
`-----BEGIN CERTIFICATE-----
MIIF6TCCA9GgAwIBAgIQBeTcO5Q4qzuFl8umoZhQ4zANBgkqhkiG9w0BAQwFADCB
iDELMAkGA1UEBhMCVVMxEzARBgNVBAgTCk5ldyBKZXJzZXkxFDASBgNVBAcTC0pl
cnNleSBDaXR5MR4wHAYDVQQKExVUaGUgVVNFUlRSVVNUIE5ldHdvcmsxLjAsBgNV
BAMTJVVTRVJUcnVzdCBSU0EgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkwHhcNMTQw
OTEyMDAwMDAwWhcNMjQwOTExMjM1OTU5WjBfMQswCQYDVQQGEwJGUjEOMAwGA1UE
CBMFUGFyaXMxDjAMBgNVBAcTBVBhcmlzMQ4wDAYDVQQKEwVHYW5kaTEgMB4GA1UE
AxMXR2FuZGkgU3RhbmRhcmQgU1NMIENBIDIwggEiMA0GCSqGSIb3DQEBAQUAA4IB
DwAwggEKAoIBAQCUBC2meZV0/9UAPPWu2JSxKXzAjwsLibmCg5duNyj1ohrP0pIL
m6jTh5RzhBCf3DXLwi2SrCG5yzv8QMHBgyHwv/j2nPqcghDA0I5O5Q1MsJFckLSk
QFEW2uSEEi0FXKEfFxkkUap66uEHG4aNAXLy59SDIzme4OFMH2sio7QQZrDtgpbX
bmq08j+1QvzdirWrui0dOnWbMdw+naxb00ENbLAb9Tr1eeohovj0M1JLJC0epJmx
bUi8uBL+cnB89/sCdfSN3tbawKAyGlLfOGsuRTg/PwSWAP2h9KK71RfWJ3wbWFmV
XooS/ZyrgT5SKEhRhWvzkbKGPym1bgNi7tYFAgMBAAGjggF1MIIBcTAfBgNVHSME
GDAWgBRTeb9aqitKz1SA4dibwJ3ysgNmyzAdBgNVHQ4EFgQUs5Cn2MmvTs1hPJ98
rV1/Qf1pMOowDgYDVR0PAQH/BAQDAgGGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYD
VR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMCIGA1UdIAQbMBkwDQYLKwYBBAGy
MQECAhowCAYGZ4EMAQIBMFAGA1UdHwRJMEcwRaBDoEGGP2h0dHA6Ly9jcmwudXNl
cnRydXN0LmNvbS9VU0VSVHJ1c3RSU0FDZXJ0aWZpY2F0aW9uQXV0aG9yaXR5LmNy
bDB2BggrBgEFBQcBAQRqMGgwPwYIKwYBBQUHMAKGM2h0dHA6Ly9jcnQudXNlcnRy
dXN0LmNvbS9VU0VSVHJ1c3RSU0FBZGRUcnVzdENBLmNydDAlBggrBgEFBQcwAYYZ
aHR0cDovL29jc3AudXNlcnRydXN0LmNvbTANBgkqhkiG9w0BAQwFAAOCAgEAWGf9
crJq13xhlhl+2UNG0SZ9yFP6ZrBrLafTqlb3OojQO3LJUP33WbKqaPWMcwO7lWUX
zi8c3ZgTopHJ7qFAbjyY1lzzsiI8Le4bpOHeICQW8owRc5E69vrOJAKHypPstLbI
FhfFcvwnQPYT/pOmnVHvPCvYd1ebjGU6NSU2t7WKY28HJ5OxYI2A25bUeo8tqxyI
yW5+1mUfr13KFj8oRtygNeX56eXVlogMT8a3d2dIhCe2H7Bo26y/d7CQuKLJHDJd
ArolQ4FCR7vY4Y8MDEZf7kYzawMUgtN+zY+vkNaOJH1AQrRqahfGlZfh8jjNp+20
J0CT33KpuMZmYzc4ZCIwojvxuch7yPspOqsactIGEk72gtQjbz7Dk+XYtsDe3CMW
1hMwt6CaDixVBgBwAc/qOR2A24j3pSC4W/0xJmmPLQphgzpHphNULB7j7UTKvGof
KA5R2d4On3XNDgOVyvnFqSot/kGkoUeuDcL5OWYzSlvhhChZbH2UF3bkRYKtcCD9
0m9jqNf6oDP6N8v3smWe2lBvP+Sn845dWDKXcCMu5/3EFZucJ48y7RetWIExKREa
m9T8bJUox04FB6b9HbwZ4ui3uRGKLXASUoWNjDNKD/yZkuBjcNqllEdjB+dYxzFf
BT02Vf6Dsuimrdfp5gJ0iHRc2jTbkNJtUQoj1iM=
-----END CERTIFICATE-----
`],
  },

  test: {
    wss: 'wss://s.altnet.rippletest.net:51233',
    faucet: 'https://faucet.altnet.rippletest.net/accounts',
    certificates: [`-----BEGIN CERTIFICATE-----
MIIGHzCCBQegAwIBAgIQZVrM7fIUFRxOEkmjVlxrYDANBgkqhkiG9w0BAQsFADBf
MQswCQYDVQQGEwJGUjEOMAwGA1UECBMFUGFyaXMxDjAMBgNVBAcTBVBhcmlzMQ4w
DAYDVQQKEwVHYW5kaTEgMB4GA1UEAxMXR2FuZGkgU3RhbmRhcmQgU1NMIENBIDIw
HhcNMTkwNDI5MDAwMDAwWhcNMjAwNDI5MjM1OTU5WjBrMSEwHwYDVQQLExhEb21h
aW4gQ29udHJvbCBWYWxpZGF0ZWQxJDAiBgNVBAsTG0dhbmRpIFN0YW5kYXJkIFdp
bGRjYXJkIFNTTDEgMB4GA1UEAwwXKi5hbHRuZXQucmlwcGxldGVzdC5uZXQwggEi
MA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDQEAw6I2062RdTvb20fl5lESHZ
iJ0+OM1Oih3r4kt1iqKjCu4o9lITCM/5XFLn7nKBakLUtd5g2zsHMYCNXPkJsqr5
xlHgrlTqxAEOe0/QMyICStzC/mgMeZQhMow8sfN43ClsCEV4RZqP+F6BNav9C4BN
FhSeI9pzy2v4jFJTmvGSUm3rRaHGsSXSY1wwenQeQvXTXTULngfK2wd0rjR7HFsY
OZC6kDLW5Flj6jVX19l5qAYJhyWueoHSkODtOVUZeNHW4ip+T0w1uh8Sdz7RHBNN
SP+acPyVz+jSTXDmlT5NnSaSmr54ORjxCLF+/MuRXKcHXcCkc65l3MMhIXsLAgMB
AAGjggLJMIICxTAfBgNVHSMEGDAWgBSzkKfYya9OzWE8n3ytXX9B/Wkw6jAdBgNV
HQ4EFgQUgPI58+IFqXqwJO3/Ayv3RtEhypAwDgYDVR0PAQH/BAQDAgWgMAwGA1Ud
EwEB/wQCMAAwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMEsGA1UdIARE
MEIwNgYLKwYBBAGyMQECAhowJzAlBggrBgEFBQcCARYZaHR0cHM6Ly9jcHMudXNl
cnRydXN0LmNvbTAIBgZngQwBAgEwQQYDVR0fBDowODA2oDSgMoYwaHR0cDovL2Ny
bC51c2VydHJ1c3QuY29tL0dhbmRpU3RhbmRhcmRTU0xDQTIuY3JsMHMGCCsGAQUF
BwEBBGcwZTA8BggrBgEFBQcwAoYwaHR0cDovL2NydC51c2VydHJ1c3QuY29tL0dh
bmRpU3RhbmRhcmRTU0xDQTIuY3J0MCUGCCsGAQUFBzABhhlodHRwOi8vb2NzcC51
c2VydHJ1c3QuY29tMDkGA1UdEQQyMDCCFyouYWx0bmV0LnJpcHBsZXRlc3QubmV0
ghVhbHRuZXQucmlwcGxldGVzdC5uZXQwggEEBgorBgEEAdZ5AgQCBIH1BIHyAPAA
dgC72d+8H4pxtZOUI5eqkntHOFeVCqtS6BqQlmQ2jh7RhQAAAWpqdpMTAAAEAwBH
MEUCIFvNilgFe/ZcrLQsoxgC7LqB1JNlp5iGi+rolgLv3oxgAiEAtovapui1y/rv
TQDJVIfbJNCohOJiilBYWmp3LxHqkcEAdgBep3P531bA57U2SH3QSeAyepGaDISh
EhKEGHWWgXFFWAAAAWpqdpNIAAAEAwBHMEUCIQC/iVRdRxtHIZVVEl+ERPw0QD3t
AYboOHAqKmTHQA62EwIgTkis/eCm0jqfMLcK81B8oEgDd1N9VZOG+pKfflgg1+8w
DQYJKoZIhvcNAQELBQADggEBAApOtMkSb/Rf05YAHpd78tiRxdUivDPVphkUeLKE
OMvcowZ7xzZFz72uKx7txxhu/RpJY0g7W6kPAc1E8+MuQC6OU4JJiCc1s2yPNkor
eyeAH2AVqsj7GfOWPRIQp234HW73+PGEoeq/uK0sMf8BywDkOhhAtLtUrW69w0k6
obg/VSM4w3wR7oQpb1q7yDNbj0sCM/gVd23lgDl2mi6M+N/sINo7JtoxTv8/F9/R
YxBvre4eabGxv2BSuEhFUdA30lDiwYOj4UnLVoCKMjsZZoY4WnkKrm4q6hITkV2c
uiKk3SZRjGo9kHr8kBmWVY0Icm3LRF6bNMEcve6un3v7D/c=
-----END CERTIFICATE-----`,]
  }
}

const NETWORK = NETWORK_LIST.dev;

/* Use before each so we use a different address for each request */
test.before(async t => {
  t.context.server = NETWORK.wss;
  t.context.faucet = NETWORK.faucet;

  const accounts = await Promise.all([
    http<IFaucet>(NETWORK.faucet),
    http<IFaucet>(NETWORK.faucet),
    http<IFaucet>(NETWORK.faucet)
  ]);

  t.context.invalidAccount = {
    address: accounts[0].account.address,
    secret: accounts[0].account.secret,
    keypair: {
      publicKey: '',
      privateKey: ''
    }
  };

  t.context.validAccount = {
    address: accounts[1].account.address,
    secret: accounts[1].account.secret,
    keypair: {
      publicKey: '',
      privateKey: ''
    }
  };

  t.context.emptyAccount = {
    address: accounts[2].account.address,
    secret: accounts[2].account.secret,
    keypair: {
      publicKey: '',
      privateKey: ''
    }
  };

  const rippleOptions: SologenicTypes.RippleAPIOptions = {
    server: t.context.server,
    trustedCertificates: NETWORK.certificates,
    trace: false
  };

  const thOptions: SologenicTypes.TransactionHandlerOptions = {
    queueType: SologenicTypes.QUEUE_TYPE_STXMQ_HASH,
    hash: {}
  };

  t.context.handler = new SologenicTxHandler(rippleOptions, thOptions);
});

test.serial('sologenic tx hash initialization', async t => {
  await t.throwsAsync<SologenicError>(t.context.handler.setAccount({
    address: 'foobar',
    secret: 'barbaz',
    keypair: {
      publicKey: '',
      privateKey: ''
    }
  }));

  await t.throwsAsync<SologenicError>(t.context.handler.setAccount({
    address: 'foobar',
    secret: '',
    keypair: {
      publicKey: 'foobar',
      privateKey: 'barbaz'
    }
  }));

  await t.notThrowsAsync(t.context.handler.setAccount(t.context.validAccount));
});

test.serial('transaction to sologenic xrpl stream', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;
    const eventsReceived: Array<string> = [];

    await handler.setAccount(t.context.validAccount);

    // Make sure we're actually performing an operation (setflags: 5)
    const tx: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    const transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    // noUnusedLocals is enabled in the tsconfig, so we access the object at least once
    transaction.events
      .on('queued', () => {
        eventsReceived.push('queued');
      })
      .on('dispatched', () => {
        eventsReceived.push('dispatched');
      })
      .on('requeued', () => {
        eventsReceived.push('requeued');
      })
      .on('warning', () => {
        eventsReceived.push('warning');
      })
      .on('validated', (event: SologenicTypes.ValidatedEvent) => {
        eventsReceived.push('validated');

        t.is(event.reason, 'tesSUCCESS');
      })
      .on('failed', (event: SologenicTypes.FailedEvent) => {
        eventsReceived.push('failed');

        t.fail(event.reason);
      });

    await transaction.promise;

    transaction.events.removeAllListeners('queued');
    transaction.events.removeAllListeners('dispatched');
    transaction.events.removeAllListeners('requeued');
    transaction.events.removeAllListeners('warning');
    transaction.events.removeAllListeners('validated');
    transaction.events.removeAllListeners('failed');

    t.false(eventsReceived.includes('failed'))
    t.true(eventsReceived.includes('queued'));
    t.true(eventsReceived.includes('dispatched'));
    t.true(eventsReceived.includes('validated'));

  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction should fail immediately (invalid flags)', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;
    await handler.setAccount(t.context.validAccount);

    // See flags at https://xrpl.org/accountset.html
    const tx: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: -1
    };

    const transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    let txFailed = false;

    transaction.events.on('failed', (failedTx: SologenicTypes.FailedEvent) => {
      txFailed = true;

      t.is(failedTx.reason, "-1 not in range 0 <= $val <= 4294967295");
    });

    await transaction.promise;

    t.true(txFailed);
  } catch (error) {
    t.fail();
  }
});

test.serial('transaction should be successful', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;

    await handler.setAccount(t.context.validAccount);

    // See flags at https://xrpl.org/accountset.html
    const tx: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    const transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    transaction.events
      .on('validated', (event: SologenicTypes.ValidatedEvent) => {
        t.true(typeof event !== 'undefined');
        t.is(event.reason, 'tesSUCCESS');
      })
      .on('failed', (event: SologenicTypes.FailedEvent) => {
        t.true(typeof event !== 'undefined');
        t.fail(event.reason);
      });

    await transaction.promise;
  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction will fail with tefBAD_AUTH (invalid account cannot send on behalf of valid account)', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;

    await handler.setAccount(t.context.invalidAccount);

    // See flags at https://xrpl.org/accountset.html
    const tx: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    const transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    /*
    {
      unsignedTx: {
        id: '39db7e35-e63d-46b2-a088-3c40af38f189',
        data: { txJSON: [Object] }
      },
      result: {
        resultCode: 'tefBAD_AUTH',
        resultMessage: "Transaction's public key is not authorized.",
        engine_result: 'tefBAD_AUTH',
        engine_result_code: -196,
        engine_result_message: "Transaction's public key is not authorized.",
        tx_blob: '120003228000000024004A8B73201B004A8B7520210000000568400000000000000C732103CD5F0DCB5C251BE391ACB6FA3ACF2FCC24F526EE35140D5505A104CE2C1AFF787446304402202F46BEA246D1BD0A37328CDA433FD8D146A871E386645FB1847DA4B6AAF99086022052E26FD37E804BBA0A1E8F54CA086C886A62FF27E8EFF87A3FAD6453F1CA182F8114CDF8D447CE9FD229C5A7E9F55DCE9D3C351BF824F9EA7D2433396462376533352D653633642D343662322D613038382D336334306166333866313839E1F1',
        tx_json: {
          Account: 'rK8ncHPc8oFe8fHP9GStDgsypHPcfKR5vt',
          Fee: '12',
          Flags: 2147483648,
          LastLedgerSequence: 4885365,
          Memos: [Array],
          Sequence: 4885363,
          SetFlag: 5,
          SigningPubKey: '03CD5F0DCB5C251BE391ACB6FA3ACF2FCC24F526EE35140D5505A104CE2C1AFF78',
          TransactionType: 'AccountSet',
          TxnSignature: '304402202F46BEA246D1BD0A37328CDA433FD8D146A871E386645FB1847DA4B6AAF99086022052E26FD37E804BBA0A1E8F54CA086C886A62FF27E8EFF87A3FAD6453F1CA182F',
          hash: 'C6C2C1D4588CBE7BB2A8F1CFA939E27D567576D31761FB885A0EDFB5598776C9'
        }
      },
      cause: { status: 'failed', reason: 'tefBAD_AUTH' }
    }
    */

    let txFailed = false;

    transaction.events.on('failed', (failedTx: SologenicTypes.FailedEvent) => {
      t.is(failedTx.reason, "tefBAD_AUTH");
      txFailed = true;
    });

    await transaction.promise;

    t.true(txFailed);
  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction send multiple transactions', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;

    await handler.setAccount(t.context.validAccount);

    // See flags at https://xrpl.org/accountset.html
    const tx1: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    // See flags at https://xrpl.org/accountset.html
    const tx2: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    // See flags at https://xrpl.org/accountset.html
    const tx3: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 6
    };

    const promises = await Promise.all([
      handler.submit(tx1).promise,
      handler.submit(tx2).promise,
      handler.submit(tx3).promise
    ]);

    for (const transaction in promises) {
      if (promises[transaction].hasOwnProperty("hash")) {
        t.true(typeof promises[transaction] === 'object');
        t.true(typeof promises[transaction].hash === 'string');
      } else {
        t.fail();
      }
    }
  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction should fail with insufficient fee', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;

    await handler.setAccount(t.context.validAccount);
    await handler.fetchCurrentState();

    await handler.setLedgerBaseFeeXRP('0');

    // See flags at https://xrpl.org/accountset.html
    const tx: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'AccountSet',
      SetFlag: 5
    };

    let txQueued = false;
    let txDispatched = false;
    let txRequeued = false;
    let txWarning: boolean = false;
    let txValidated: boolean = false;
    let txFailed = false;

    const transaction: SologenicTypes.TransactionObject = handler.submit(tx);

    transaction.events
      .on('queued', () => {
        txQueued = true;
      })
      .on('dispatched', () => {
        txDispatched = true;
      })
      .on('requeued', () => {
        txRequeued = true;
      })
      .on('warning', (event: SologenicTypes.WarningEvent) => {
        if (!txWarning) {
          // TODO: Clean up the reason to only contain telINSUF_FEE_P
          t.is(event.reason, 'telINSUF_FEE_P: Fee insufficient.');
          txWarning = true;
        }
      })
      .on('validated', () => {
        // Our transaction has been validated
        txValidated = true;
      })
      .on('failed', () => {
        txFailed = true;
      });

    await transaction.promise;

    t.true(txQueued);
    t.true(txDispatched);
    t.true(txRequeued);
    t.true(txValidated);
    t.true(txWarning);
    t.false(txFailed);

  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction should fail because not enough funds are available', async t => {
  try {
    const handler: SologenicTxHandler = t.context!.handler;

    await handler.setAccount(t.context.emptyAccount);

    // See flags at https://xrpl.org/accountset.html
    const tx1: SologenicTypes.TX = {
      Account: t.context.emptyAccount.address,
      TransactionType: 'Payment',
      Amount: handler.getRippleApi().xrpToDrops('99999'),
      Destination: t.context.validAccount.address
    };

    // Send all funds out of this account to our validAccount, then
    // we'll send another transaction which will not be successful
    // because we'll be out of funds.

    const transaction: SologenicTypes.TransactionObject = handler.submit(tx1);

    transaction.events.on('failed', (failedTx: SologenicTypes.FailedEvent) => {
      t.true(typeof failedTx !== 'undefined');
      t.is(failedTx.reason, 'tecUNFUNDED_PAYMENT');
    });

    await transaction.promise;

  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction should fail because account is not funded', async t => {
  try {
    const handler: SologenicTxHandler = t.context.handler;

    const xrplAddress = handler.getRippleApi().generateAddress();

    await handler.setAccount(t.context.validAccount);

    // Activate the new account
    const tx1: SologenicTypes.TX = {
      Account: t.context.validAccount.address,
      TransactionType: 'Payment',
      Amount: handler.getRippleApi().xrpToDrops('20'),
      Destination: xrplAddress.address
    };

    const transaction1: SologenicTypes.TransactionObject = handler.submit(tx1);
    await transaction1.promise;

    // With the newly activated account perform an underfunded transaction
    await handler.setAccount({
      address: xrplAddress.address!,
      secret: xrplAddress.secret!,
      keypair: {
        publicKey: '',
        privateKey: ''
      }
    });

    // See flags at https://xrpl.org/accountset.html
    const tx2: SologenicTypes.TX = {
      Account: xrplAddress.address!,
      TransactionType: 'Payment',
      Amount: handler.getRippleApi().xrpToDrops('100'),
      Destination: t.context.validAccount.address
    };

    const transaction2: SologenicTypes.TransactionObject = handler.submit(tx2);

    transaction2.events.on('failed', (failedTx: SologenicTypes.FailedEvent) => {
      t.true(typeof failedTx !== 'undefined');
      t.is(failedTx.reason, 'tecUNFUNDED_PAYMENT');
    });

    await transaction2.promise;

  } catch (error) {
    t.fail(error);
  }
});

test.serial('transaction should return next sequence', async t => {
  try {
    const handler: SologenicTxHandler = t.context.handler;

    await handler.setAccount(t.context.validAccount);
    handler.setAccountSequence(0);

    const sequence = await handler.fetchCurrentState();
    t.true(sequence !== 0);

  } catch (error) {
    t.fail(error);
  }
});
