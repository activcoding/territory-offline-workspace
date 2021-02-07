package com.territoryoffline.fieldcompanion;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.jeep.plugin.capacitor.CapacitorDataStorageSqlite;
import com.bkon.capacitor.fileselector.FileSelector;
import com.byteowls.capacitor.filesharer.FileSharerPlugin;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorDataStorageSqlite.class);
      add(FileSelector.class);
      add(FileSharerPlugin.class);
    }});
  }
}
