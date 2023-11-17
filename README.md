# IPQualityScore NPM Device Fingerprint Tracker Package for React

IPQS combines our advanced industry blacklist fraud data and global threat network with device fingerprinting technologies to offer one of the most advanced anti-fraud tools on the market. The IPQS device fingerprint tracker tracks devices using advanced algorithms while offering websites the ability to safeguard themselves against bot attacks, duplicate account creation, chargeback fraud, and much more.

The IPQS device fingerprint tracker can help:

- Stop account takeover attacks
- Stop bot clicks
- Prevent chargebacks
- Stop fraudulant transactions
- Prevent affiliate fraud

And much more.

This NPM package is built for JavaScript frameworks SPA tools such as React, Vue, Angular, and more. It’s compatible with both JavaScript and Typescript.

## Further Reading

- [Creating a Device Fingerprint Tracker](https://www.ipqualityscore.com/user/tracker/new)
- [Device Fingerprint Overview](https://www.ipqualityscore.com/device-fingerprinting)
- [Device Fingerprint API](https://www.ipqualityscore.com/documentation/device-fingerprint/overview)

## Installation

npm i node_js_ipqs_device_tracker

## Initialization

First, import the IPQualityScore device fingerprint tracker into your project:

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";
```

Next, initialize the device fingerprint tracker in the webapp:

```javascript
const secretKey = process.env.VUE_APP_IPQS_DT_KEY;
DeviceFingerprint.initializeScriptAsync(secretKey)
  .then(async () => {
    DeviceFingerprint.AfterResult((result) => {
      save_fingerprint(result);
      LOGS.log_to_console("Fingerprint", result);
      // FINGERPRINT.save_fingerprint(result);
      // return result;
    });
    DeviceFingerprint.Init();
  })
  .catch((err) => {
    console.log("DT Error");
    console.log(err);
  });
```

### How To Find The Device Fingerprint Tracker Secret Key

Before integrating the IPQS device fingerprint tracker in the webapp, a device tracker needs to be created in your IPQS account. The secret key for the device fingerprint tracker is tied to the device tracker itself. It does not use your IPQS account's API key.

1. Log in to your IPQS account: [https://www.ipqualityscore.com/login](https://www.ipqualityscore.com/login)
2. Navigate to the Device Fingerprint Tracking Dashboard from the left-hand navigation bar: [https://www.ipqualityscore.com/user/tracker](https://www.ipqualityscore.com/user/tracker)
3. (A) If a tracker has not been created yet, click the blue 'Create New Fingerprint Tracker' button to create one first.
4. (B) Scroll to the bottom of the Device Fingerprint Tracking Dashboard, and find the device tracker that is going to be used in the webapp.
5. Click on the Red Details button next to the device tracker.

A new page will load with the documentation and JS snippet for the device tracker. The secret key is located in the JS snippet between "https://www.ipqscdn.com/api/*/" and "/learn.js". Copy long alphanumeric string in that URL. This is the device fingerprint tracker secret key.

# React Examples

To initialize the Device Tracker Package in React, you can do it in one of two ways

### Asynchronously (recommended)

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";

function App() {
  const secretKey = `YourSecretKey`;
  useEffect(() => {
    DeviceFingerprint.initializeScriptAsync(secretKey)
      .then(() => {
        DeviceFingerprint.Init();
      })
      .catch(() => {
        // Any errors loading the external script will be caught here
      });
  });
}
```

### Synchronously (not recommended)

This is not recommended as this will not tell you when the external script has been loaded, nor will it be easy to catch any errors loading an external script

```javascript
import DeviceFingerprint from "ipqs-device-fingerprint-for-react";

function App() {
  useEffect(() => {
    DeviceFingerprint.initializeScript();
    setTimeout(function () {
      DeviceFingerprint.AfterResult(afterResult);
      DeviceFingerprint.Init();
    }, 1000);
  });
}
```

# Vue Examples

### Options API

```javascript
export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const secretKey = process.env.VUE_APP_IPQS_DT_KEY;
    DeviceFingerprint.initializeScriptAsync(secretKey)
      .then(async () => {
        DeviceFingerprint.AfterResult((result) => {
          console.log("IPQS Fingerprint: ", result);
          // ########################################
          // Handle The Fingerprint Record
          // ########################################
          // Best practice is to save the fingerprint results to the Store. The
          // example below saves the fingerprint results to a Vuex initialized store.

          // this.$store.commit.save_fingerprint(result);
          // return result;
        });
        DeviceFingerprint.Init();
      })
      .catch((err) => {
        console.log("DT Error");
        console.log(err);
      });
  },
  mounted() {},
  // created: {},
  computed: {},
  watch: {},
  methods: {},
};
</script>
```

## Other Methods

**NOTE**: The following methods will only work after `initializeScriptAsync()` or `initializeScriptAsync()` have successfully loaded in React.

### Init();

Initializes the Device Tracker

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  const callback = (result) => {
    console.log(result);
  };
  DeviceFingerprint.AfterResult(callback);
  DeviceFingerprint.Init();
});
```

### AfterResult(callback);

Enables a callback function to be called when DeviceFingerprint.Init() succeeds

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  const callback = (result) => {
    console.log(result);
  };
  DeviceFingerprint.AfterResult(callback);
  DeviceFingerprint.Init();
});
```

### AfterFailure(callback);

Enables a callback function to be called when DeviceFingerprint.Init() fails

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  const callback = (result) => {
    console.log(result);
  };
  DeviceFingerprint.AfterFailure(callback);
  DeviceFingerprint.Init();
});
```

### Pause();

Pauses the Device Tracker

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  DeviceFingerprint.Init();
  DeviceFingerprint.Pause();
});
```

### Resume();

Resumes the Device Tracker. This works in conjunction with `Resume()`

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  DeviceFingerprint.Init();
  DeviceFingerprint.Pause();
  DeviceFingerprint.Resume();
});
```

### Trigger(formId, callback);

Sets a trigger on a form based on a specific id, and assigns a callback for when that form is submitted.

If used in conjunction with `AfterResult()`, you will not fire the result callback until that specific form is submitted.

This must be called before `Init()`

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  const formId = "someFormId";
  const callback = (event) => {
    event.preventDefault();
  };
  DeviceFingerprint.Trigger(`#${formId}`, callback);
  DeviceFingerprint.Init();
});
```

```html
<form id="{formId}">
  <button type="submit">Submit</button>
</form>
```

### SetFormFieldPrepend(prefix: string);

Sets the Form Field Prepend prefix for form submission triggers.

This works in conjunction with `Trigger()` and must be called before `Init()`

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  const prefix = "somePrefix";
  DeviceFingerprint.SetFormFieldPrepend(prefix);

  const formId = "someFormId";
  const callback = (event) => {
    event.preventDefault();
  };
  DeviceFingerprint.Trigger(`#${formId}`, callback);
  DeviceFingerprint.Init();
});
```

```html
<form id="{formId}">
  <button type="submit">Submit</button>
</form>
```

### Field(fieldName: string, fieldId: number);

Allows you to specify additional fields for order submission and payment processing

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  const fieldName = "someField";
  const fieldId = "#someFieldId";
  DeviceFingerprint.Field(fieldName, fieldId);
  DeviceFingerprint.Init();
});
```

# Define the Tracker Domain

IPQS device trackers can be tied to specific domains. This option is selected while creating the device tracker. Adding the defined domain to the device tracker only requires one additional step - pass the domain name ( or device tracker name ) as a second variable with the secret key.

```javascript
    const secretKey = process.env.VUE_APP_IPQS_DT_KEY;
    const tracker = "example.com";
    DeviceFingerprint.initializeScriptAsync(secretKey, tracker)
      .then(async () => {
        DeviceFingerprint.AfterResult((result) => {
          console.log("IPQS Fingerprint: ", result);
          // ########################################
          // Handle The Fingerprint Record
          // ########################################
          // Best practice is to save the fingerprint results to the Store. The
          // example below saves the fingerprint results to a Vuex initialized store.

          // this.$store.commit.save_fingerprint(result);
          // return result;
        });
        DeviceFingerprint.Init();
      });

</script>
```

# Define the Custom Domain

IPQS device trackers can be served through custom domains. Defining a custom domain for the device tracker host is similiar to the steps above. Simply pass the custom domain as a third option to the DeviceFingerprint.initializeScriptAsync() call.

Do not include 'https://' in the custom domain. Only add the subdomain (if needed), the domain, and TLD in the custom_domain string value.

Eg. example-host-domain.com

If passing a custom domain to the DeviceFingerprint.initializeScriptAsync() function, you MUST also include the tracker domain/name, too. If the device tracker is configured with a wildcard (\*), pass the wildcard as the tracker name.

```javascript
    const secretKey = process.env.VUE_APP_IPQS_DT_KEY;
    const tracker = "example.com";
    const custom_domain = "example-host-domain.com"
    DeviceFingerprint.initializeScriptAsync(secretKey, tracker, custom_domain)
      .then(async () => {
        DeviceFingerprint.AfterResult((result) => {
          console.log("IPQS Fingerprint: ", result);
          // ########################################
          // Handle The Fingerprint Record
          // ########################################
          // Best practice is to save the fingerprint results to the Store. The
          // example below saves the fingerprint results to a Vuex initialized store.

          // this.$store.commit.save_fingerprint(result);
          // return result;
        });
        DeviceFingerprint.Init();
      });

</script>
```

# Need Help?

If you need additional help or would like to schedule a meeting for assistance, open a new help ticket in your [IPQS account](https://www.ipqualityscore.com/user/support/new).

IPQS offers a full white-glove support service for all customers with an enterprise-level subscription. We are always happy to help!
