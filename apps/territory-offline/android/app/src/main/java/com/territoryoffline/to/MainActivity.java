package com.territoryoffline.to;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.getcapacitor.community.database.sqlite.CapacitorSQLite;
import java.util.ArrayList;
import com.bkon.capacitor.fileselector.FileSelector;
import com.byteowls.capacitor.filesharer.FileSharerPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(CapacitorSQLite.class);
      add(FileSelector.class);
      add(FileSharerPlugin.class);
    }});
  }
}
