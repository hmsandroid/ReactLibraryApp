package com.libraryappdemo.huawei;

import android.widget.Toast;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.huawei.agconnect.crash.AGConnectCrash;

public class CrashModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";
    CrashModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }
    @Override
    public String getName() {
        return "Crasher";
    }
    @ReactMethod
    public void crash() {
        AGConnectCrash.getInstance().enableCrashCollection(true);
        AGConnectCrash.getInstance().testIt(getReactApplicationContext());
    }
}
