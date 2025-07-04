# Real Talk: Technical Overview

## Hardware Architecture

The Mesh V1 uses a three-component architecture built around a Raspberry Pi as the controlling computer. The system integrates an external high-powered WiFi card for mesh networking and an independent RAK4631 Meshtastic radio for LoRa communications.

All components are housed in a 3D printed enclosure with M12 bulkhead connectors providing external connections. The bulkhead connections handle 5V power input and Ethernet connectivity.

## Network Architecture

The Mesh V1 operates three independent radio systems:

1. **Pi Onboard WiFi** - Creates an access point for devices to connect to the node and access the WiFi mesh. This is just a standard WiFi access point - connect to it like any other WiFi network.
2. **External WiFi Card** - High-powered radio forming the 2.4/5.8 GHz WiFi mesh between nodes  
3. **RAK4631 Meshtastic Node** - Standard Meshtastic implementation creating long-range, low-bandwidth LoRa mesh. If you've used Meshtastic before, you know exactly what to expect.

## Software

The onboard software handles three main functions:

1. **WiFi Mesh Networking** - Automatically creates a WiFi mesh network with other nodes, providing a flat local area network between all connected nodes
2. **Reticulum Transport Instance** - Runs a Reticulum transport instance configured to operate over the WiFi mesh
3. **Web Interface** - Self-served web page showing WiFi mesh connection status for everyone on the network

## What This Lets Us Do

The flat LAN WiFi mesh can be used for anything requiring multiple computers/phones on the same network. Tested and targeted uses:

**1. ATAK** - ATAK devices on the same network auto-discover each other and communicate. WiFi provides enough bandwidth for position updates, texts, pictures, and voice.

**2. Reticulum** - Users can use Reticulum applications like Sideband or MeshChat over the WiFi mesh via the onboard Reticulum transport instance. These provide chat, pictures, and even voice/video in some instances. This allows our nodes to become links in much larger Reticulum based networks if desired.

**3. Meshtastic** - Independent Meshtastic radio allows long-range LoRa connections with other Meshtastic users and operates just fine as a Meshtastic-only device. If users also decide to add the official ATAK Meshtastic plugin, this provides additional capability for long-range ATAK connectivity in parallel to the wifi mesh and allows Natak Mesh users to work with users who use Meshtastic-only for their ATAK connectivity.

## Current Paths of Work

1. **TAKServer Integration** - Since we have a Pi as our controlling computer, we are looking at integrating TAKServer onto the radio, opening more options for ATAK users to coordinate.

2. **EdgeMap Project** - Porting the EdgeMap project onto the radio, offering a simplified situational awareness tool running directly on the radio for users that may want to pivot from ATAK.

3. **User Created Software** - Since this project is open source, the onboard software currently is relatively simple. Our hope is that users will come up with novel uses for the hardware and those can be integrated into future releases.
