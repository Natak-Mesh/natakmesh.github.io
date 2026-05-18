# Use Case Page Restructure Plan
Date: 2025-05-15

## Overview
Break the monolithic use-cases.html into three dedicated sub-pages, each with images. use-cases.html becomes a hub page with cards linking to each.

## New Page Structure

### use-cases.html (Hub Page)
- Three cards with hero images and short descriptions
- Links to each sub-page
- No detailed content — just navigation

### use-cases/atak.html — ATAK Operations
Everything ATAK-related:
- Native ATAK over WiFi mesh (SA, chat, pictures, voice at full speed)
- LoRa CoT Bridge (extended range SA — positions over LoRa automatically)
- ATAK Voice over mesh
- Video streaming via OpenTAK ICU / MediaMTX
- Portable OpenTAKServer on a Nucleus node

Images available:
- images/12_25_update/atak.jpg — ATAK on phone
- images/cropped-TAK-CIV-Splash-4.png — TAK splash/logo
- images/atak_logo.png — ATAK logo
- images/12_25_update/takserver_dashboard.png — TAKserver dashboard
- images/12_25_update/takserver.png / takserver_2.png — TAKserver UI
- images/12_25_update/video_stream.jpg — video streaming
- images/12_25_update/rtsp_test.png — RTSP test
- images/2_1_26_update/video stream1.png — video stream
- images/midlo_1/Screenshot_*.png — ATAK screenshots from Midlo test
- images/2_1_26_update/5km.png / 5km2.jpg — range test results

Images needed:
- Field photo of ATAK SA in action on mesh (good one exists: atak.jpg)
- CoT bridge in action — ATAK screenshot showing remote positions received via LoRa
- ATAK voice plugin screenshot

### use-cases/secure-comms.html — Secure & Clandestine Communications
The encrypted comms stack that requires no external infrastructure:
- Reticulum — end-to-end encrypted messaging (Sideband, MeshChat, NomadNet), forward secrecy, store-and-forward, rides on HF/VHF/LoRa RNodes
- VPN / Tunnels — Tailscale/WireGuard connecting remote nodes
- Yggdrasil (coming) — sovereign overlay network, zero dependency
- WPA3 mesh encryption as transport layer

Images available:
- images/reticulum_logo_512.png — Reticulum logo
- images/12_25_update/reticulum_tcp.png — Reticulum TCP config
- images/12_25_update/rns_transport.jpg — RNS transport
- images/12_25_update/rnstatus.png — RNS status
- images/wpa excalidraw.png / .svg — WPA/encryption diagram
- images/12_25_update/mesh_monitor_remote_access.png — remote access UI
- images/excalidraw2.svg — network diagram

Images needed:
- Sideband app screenshot
- Jami call screenshot (if moving Jami here instead of mesh-comms)
- Yggdrasil config or network diagram
- Field photo of "comms mode" deployment

### use-cases/mesh-comms.html — Mesh Communications
Comms that aren't ATAK and aren't the clandestine stack:
- Jami — encrypted voice/video calls via OpenDHT, no cloud, no SIP, works offline
- Meshtastic (BLE mode) — phone app, AES-256 text + GPS over LoRa
- Internet gateway distribution (Starlink/cellular shared across mesh)
- Large events / outdoor activities

Images available:
- images/12_25_update/Meshtastic_app.png — Meshtastic app
- images/meshtastic-logo-png_seeklogo-483887.png — Meshtastic logo
- images/12_25_update/apps_services.png — apps/services overview
- images/starlink.jpg — Starlink/internet gateway
- images/12_25_update/2_radios.jpg — dual radio setup
- images/phone.jpg / phone2.jpg — phone with apps
- images/range day.jpg / rangeday2.png — field use
- images/5_15_26 update/pack*.jpg — pack/field deployments
- images/full_mesh.png — mesh topology diagram

Images needed:
- Jami app screenshot showing a call
- Meshtastic app showing conversation
- Photo of event/outdoor deployment

## Navigation Changes
- "Use Cases" nav link stays, points to hub page
- Each sub-page has breadcrumb back to hub
- No new items in main nav bar

## Page Layout Pattern
Each sub-page uses alternating content blocks:
- Text left / image right, then image left / text right
- Feature bullet lists with orange arrow styling (existing)
- Hero section with big image and tagline at top
- CTA section at bottom
