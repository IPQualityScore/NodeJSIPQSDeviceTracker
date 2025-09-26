# IPQualityScore NPM Device Fingerprint Tracker Library

IPQS combines our advanced industry blacklist fraud data and global threat network with device fingerprinting technologies to offer one of the most advanced anti-fraud tools on the market. The IPQS device fingerprint tracker tracks devices using advanced algorithms while offering websites the ability to safeguard themselves against bot attacks, duplicate account creation, chargeback fraud, and much more.

The IPQS device fingerprint tracker can help:

- Stop account takeover attacks
- Stop bot clicks
- Prevent chargebacks
- Stop fraudulant transactions
- Prevent affiliate fraud

And much more.

This NPM package is built for JavaScript frameworks SPA tools such as React, Vue, Angular, and more. It’s compatible with both JavaScript and Typescript.

## Device Fingerprinter Documentation

- [Creating a Device Fingerprint Tracker](https://www.ipqualityscore.com/user/tracker/new)
- [Device Fingerprint Overview](https://www.ipqualityscore.com/device-fingerprinting)
- [Device Fingerprint API](https://www.ipqualityscore.com/documentation/device-fingerprint/overview)

## Installation

```
npm i node_js_ipqs_device_tracker
```

## Quick Start

### Asynchronous

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";

const secretKey = "YourSecretKey";

DeviceFingerprint.initializeScriptAsync(secretKey)
  .then(async () => {
    DeviceFingerprint.AfterResult((result) => {
      console.log(result);
    });
    DeviceFingerprint.Init();
  })
  .catch((err) => {
    console.log(err);
  });
```

### Synchronous

```javascript
DeviceFingerprint.initializeScript(this.secretKey);
setTimeout(() => {
  DeviceFingerprint.Init();
  DeviceFingerprint.AfterResult((result) => {
    console.log(result);
  });
  DeviceFingerprint.AfterFailure((error) => {
    console.log(error);
  });
}, this.syncScriptDelay);
```

## How To Find The Device Fingerprint Tracker Secret Key

** The device fingerprint tracker's secret key **is not\*\* your IPQS account's API key.

Before integrating the IPQS device fingerprint tracker in the webapp, a device tracker needs to be created in your IPQS account. The secret key for the device fingerprint tracker is tied to the device tracker itself. It does not use your IPQS account's API key.

1. Log in to your IPQS account: [https://www.ipqualityscore.com/login](https://www.ipqualityscore.com/login)
2. Navigate to the Device Fingerprint Tracking Dashboard from the left-hand navigation bar: [https://www.ipqualityscore.com/user/tracker](https://www.ipqualityscore.com/user/tracker)
   **A**. If a tracker has not been created yet, click the blue 'Create New Fingerprint Tracker' button to create one first.
   **B**. Scroll to the bottom of the Device Fingerprint Tracking Dashboard, and find the device tracker that is going to be used in the webapp.
3. Click on the Red Details button next to the device tracker.
4. Copy the alphanumeric string from the URL in the JS snippet between "https://www.ipqscdn.com/api/*/" and "/learn.js". This is the device fingerprint tracker's secret key.

# Device Fingerprint Integration In React

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
      .catch((error) => {
        // Any errors loading the external script will be caught here
        console.log(error);
      });
  });
}
```

### Synchronously (not recommended)

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";

function App() {
  useEffect(() => {
    DeviceFingerprint.initializeScript();
    setTimeout(function () {
      DeviceFingerprint.AfterResult((result) => {
        console.log(result);
      });
      DeviceFingerprint.Init();
    }, 1000);
  });
}
```

# Vue Examples

### Options API

```javascript
import DeviceFingerprint from 'node_js_ipqs_device_tracker'

export default {
name: "App",
components: {},
setup() {
	const secretKey = 'YourSecretKey';
	DeviceFingerprint.initializeScriptAsync(secretKey).then(async () => {
		DeviceFingerprint.AfterResult((result) => {
			console.log(result);
		});
	DeviceFingerprint.Init();
	}).catch((err) => {
		console.log(err);
	});
},
mounted() {},
created: {},
computed: {},
watch: {},
methods: {},
};
</script>
```

### Composition API

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";
import { ref, onMounted } from "vue";

onMounted(() => {
  const secretKey = "YourSecretKey";
  DeviceFingerprint.initializeScriptAsync(secretKey)
    .then(async () => {
      DeviceFingerprint.AfterResult((result) => {
        console.log(result);
      });
      DeviceFingerprint.Init();
    })
    .catch((err) => {
      console.log(err);
    });
});
```

## Other Methods

**NOTE**:
The following methods will only work **after** `initializeScript()` or `initializeScriptAsync()` have successfully loaded in the device fingerprint library in React, Vue, Angular, or other JS frameworks.

### Init();

Initializes the Device Tracker

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then((result) => {
  DeviceFingerprint.AfterResult(() => {
    console.log(result);
  });
  DeviceFingerprint.Init();
});
```

### AfterResult(callback);

Enables a callback function passed to the device fingerprinter after DeviceFingerprint.Init() succeeds

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  DeviceFingerprint.AfterResult(() => {
    // Do Something with the device fingerprint
    // - Turn off website features
    // - Redirect user to another page
    // - Protect sign-in attempts
    // - Disable registration systems
    // and more
  });
  DeviceFingerprint.Init();
});
```

### AfterFailure(callback);

Enables a callback function to be called when DeviceFingerprint.Init() fails

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  DeviceFingerprint.AfterFailure(() => {
    // Handle error
  });
  DeviceFingerprint.Init();
});
```

### Pause();

Pauses the Device TrackerUse in conjunction with `Resume()`

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  DeviceFingerprint.Init();
  DeviceFingerprint.Pause();
  // Save additional information to the device fingerprint
  // - Session IDs
  // - User IDs
  // - Transaction IDs
});
```

### Resume();

Resumes the Device Tracker. Use in conjunction with `Pause()`

```javascript
DeviceFingerprint.initializeScriptAsync(secretKey).then(() => {
  DeviceFingerprint.Init();
  DeviceFingerprint.Pause();
  // Save additional information to the device fingerprint
  // - Session IDs
  // - User IDs
  // - Transaction IDs
  DeviceFingerprint.Resume();
});
```

\*\* If the device fingerprinter is paused, it will not fully process until Resume() is called.

### Trigger(formId, callback);

Sets a trigger on a form based on a specific id, and assigns a callback for when that form is submitted.

If used in conjunction with `AfterResult()`, you will not fire the result callback until the attached form is submitted.

**This must be called before `Init()`**

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

This works in conjunction with `Trigger()` and **must** be called before `Init()`

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

# Disabling & Re-enabling The Pixel

The IPQS Device Tracker includes a fingerprint fallback pixel device. The device fingerprinter tracking pixel is not utilized unless the device fingerprint tracker fails to load or produces an error.

### Disable Fallback Pixel

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";

DeviceFingerprint.options.disablePixel();

const secretKey = "YourSecretKey";
DeviceFingerprint.initializeScriptAsync(secretKey)
  .then(async () => {
    DeviceFingerprint.AfterResult((result) => {
      console.log(result);
    });
    DeviceFingerprint.Init();
  })
  .catch((err) => {
    console.log(err);
  });
```

### Enable Fallback Pixel

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";

DeviceFingerprint.options.enablePixel();

const secretKey = "YourSecretKey";
DeviceFingerprint.initializeScriptAsync(secretKey)
  .then(async () => {
    DeviceFingerprint.AfterResult((result) => {
      console.log(result);
    });
    DeviceFingerprint.Init();
  })
  .catch((err) => {
    console.log(err);
  });
```

### Retrieve Fallback Pixel Status

```javascript
import DeviceFingerprint from "node_js_ipqs_device_tracker";

const options = DeviceFingerprint.options.getOptions();
console.log(options);

const secretKey = "YourSecretKey";
DeviceFingerprint.initializeScriptAsync(secretKey)
  .then(async () => {
    DeviceFingerprint.AfterResult((result) => {
      console.log(result);
    });
    DeviceFingerprint.Init();
  })
  .catch((err) => {
    console.log(err);
  });
```

# Defining a Custom Domain & Tracker

The sync and async functions mentioned above use the default www.ipqscdn.com domain and a wildcard tracker. For security purposes, it is recommended to a custom domain hosting the IPQS tracker script and the tracker name.

Using the custom options require :

- the secret key
- custom domain
- tracker name

**The IPQS custom domain must be registered to an IPQualityScore account before a custom domain can be used to host the device tracking scripts.** If your account does not have a custom domain registered, pass the 'www.ipqscdn.com' domain or 'ipqualityscore.com' domain instead.

**Do not include** 'https://' in the custom domain value. Only add the subdomain (if needed), the domain, and TLD in the custom_domain string value.

Eg. customdomain.com **AND NOT** https://customdomain.com

## Using Async Options

```javascript
const secretKey = "YourSecretKey";
const tracker = "example.com";
const custom_domain = "example-domain.com";

DeviceFingerprint.initializeScriptAsyncCustom(
  secretKey,
  custom_domain,
  tracker
).then(async () => {
  DeviceFingerprint.AfterResult((result) => {
    console.log(result);
  });
  DeviceFingerprint.Init();
});
```

## Or Using Sync Options

```javascript
import DeviceFingerprint from "ipqs-device-fingerprint-for-react";

const secretKey = "YourSecretKey";
const tracker = "example.com";
const custom_domain = "example-host-domain.com";

DeviceFingerprint.initializeScript(secretKey, custom_domain, tracker);
setTimeout(function () {
  DeviceFingerprint.AfterResult((result) => {
    console.log(result);
  });
  DeviceFingerprint.Init();
}, 1000);
```

# Need Help?

If you need additional help or would like to schedule a meeting for assistance, open a help ticket in your [IPQS account](https://www.ipqualityscore.com/user/support/new).
