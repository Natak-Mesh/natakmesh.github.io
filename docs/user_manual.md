# Dual-Mode Mesh Network System User Manual

## Table of Contents
1. [System Overview](#system-overview)
2. [Installation and Setup](#installation-and-setup)
3. [Configuration](#configuration)
4. [Operation](#operation)
5. [Troubleshooting](#troubleshooting)
6. [Advanced Features](#advanced-features)

## System Overview

The Dual-Mode Mesh Network System is a resilient communication platform that combines high-bandwidth IP-based 802.11s mesh networking with long-range Meshtastic LoRa capabilities. The system is designed as a general-purpose platform that can support a wide range of applications and devices, while providing seamless interoperability with standard Meshtastic users.

### Key Components

#### WiFi Mesh Network

The system uses the Batman-adv (Better Approach To Mobile Ad-hoc Networking) protocol to create a layer 2 mesh network over 802.11s wireless connections. This general-purpose IP network provides:

- Self-healing mesh topology
- Automatic route discovery and optimization
- Seamless client roaming
- Layer 2 bridging capabilities
- Standard IP connectivity for any connected device

**MACsec Security Layer**

All WiFi mesh traffic is encrypted using MACsec (IEEE 802.1AE) to provide:

- Link-layer encryption
- Data integrity protection
- Replay protection
- Secure node authentication

#### Meshtastic LoRa Radio

Each node includes a Meshtastic LoRa radio that is powered by the node and reports directly back to ATAK through the official Meshtastic ATAK plugin. This component provides:

- Long-range LoRa communication capabilities (up to several kilometers)
- Standard Meshtastic protocol compatibility
- Direct integration with ATAK through official plugin
- Interoperability with users running standard Meshtastic-only setups

#### ATAK Integration

The system provides dual integration paths with Android Team Awareness Kit (ATAK), each offering different capabilities:

**WiFi Mesh Integration:**
- Full native ATAK capability over IP connection
- High-bandwidth support for voice, video, pictures, and maps
- Complete tactical data sharing
- Real-time collaboration features
- Standard ATAK networking over the mesh

**Meshtastic Integration:**
- Integration through official Meshtastic ATAK plugin
- Supports chats, markers, and geolocation
- Long-range communication when WiFi mesh is unavailable
- Interoperability with standard Meshtastic users

### Network Architecture

The system provides a hybrid communication architecture that offers significant advantages:

**For NATAK Mesh Node Users:**
- High-speed WiFi mesh networking for general IP connectivity and high-bandwidth applications
- Long-range LoRa communication through integrated Meshtastic radio
- Simultaneous access to both communication methods through ATAK

**For Standard Meshtastic Users:**
- Full interoperability with NATAK mesh nodes via LoRa radio
- Standard Meshtastic ATAK plugin compatibility
- No special configuration required

**Network Interoperability:**
This architecture enables seamless communication between users with different hardware setups. Standard Meshtastic users can communicate with NATAK mesh node users through the LoRa network, while NATAK users benefit from both high-speed local mesh connectivity and long-range LoRa capabilities. This creates a broader, more inclusive communication network where users don't need identical hardware configurations to participate.

## Configuration

### Mesh Network Configuration

**File Location**: `/home/natak/mesh/mesh_config.env`

**Key Variables**:
- `MESH_NAME`: Defines the mesh network name (must be identical across all nodes)
- `MESH_CHANNEL`: Specifies the WiFi channel for mesh communication
  - 2.4 GHz channels (1-11): Better range, more potential interference
  - 5 GHz channels: Higher bandwidth, shorter range
  - DFS channels (52-144): Require radar detection, may not be available in all locations

**Channel Setup Note**: When changing channels, uncomment the desired channel and ensure you comment out the previously used channel. All nodes in the mesh must use the same channel to communicate with each other.

**After Configuration Changes**: Restart the mesh service with `sudo systemctl restart mesh-startup`

### Node Configuration with MACsec Config Tool

**Tool Location**: `/home/natak/macsec_config_tool/Macsec_config_generator.py`

**Generated Files**:
- `hostname_mapping.json`: Maps MAC addresses to hostnames and IP addresses
- `macsec.sh`: Contains encryption keys and peer configurations

**Important**: These files are generated automatically by the configuration tool and should not be modified manually. Incorrect modifications can break the mesh network's security and functionality.

**Adding Nodes**: Run the MACsec configuration tool and follow the prompts. The tool provides detailed instructions during the node addition process. After configuration, restart the mesh service.

## Operation

### Monitoring Network Status

Network status can be monitored through the mesh_monitor web interface.

To access the mesh monitor interface:

1. Connect to the mesh network
2. Open a web browser
3. Navigate to the mesh monitor web page at <node IP>:5000

The web interface provides a visual representation of:
- Connection quality
- Network topology
- Data Throughput

### General Purpose Connectivity

The system is designed as a general-purpose connectivity platform that can support a wide range of applications and devices.

#### IP Mesh Network for Any Device

The Batman-adv mesh network provides standard IP connectivity that can be used by any IP-capable device:

- **Standard IP Applications**: Any application that uses IP networking (web browsing, file sharing, VoIP, etc.) can operate over the mesh network
- **Device Connectivity**: Any device that can connect to a network (laptops, smartphones, IoT devices, etc.) can join the mesh through any node
- **Transparent Routing**: Batman-adv automatically handles routing between nodes, making the entire mesh appear as a single network segment
- **Bridged Connectivity**: The br0 bridge interface allows devices connected via Ethernet or WiFi client mode to communicate seamlessly with the mesh

To connect a device to the mesh network:
1. Connect to any mesh node via WiFi or Ethernet
2. The device will receive an IP address via DHCP
3. The device can now communicate with any other device on the mesh
