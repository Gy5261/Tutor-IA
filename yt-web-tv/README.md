# YT Web TV

Independent Android TV WebView wrapper for https://www.youtube.com/.

The app uses its own package and signature. It does not modify or impersonate the official YouTube Android TV package.

TV requirements implemented:
- LEANBACK_LAUNCHER
- 320x180 xhdpi home banner generated during build
- landscape activity
- touchscreen marked as optional
- D-pad navigation
- fullscreen video
- hardware-accelerated WebView
- local loading/error overlay

Ad mitigation:
- request filtering for known advertising hosts/paths
- service-worker request filtering on supported Android versions
- cosmetic removal and skip/fast-forward logic inside the rendered page

The filtering approach is inspired by browser request-filter engines such as the uBlock Origin integration used by Helium, but Android System WebView cannot embed Chromium desktop extensions directly.
