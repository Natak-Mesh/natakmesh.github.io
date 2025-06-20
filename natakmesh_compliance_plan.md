# NATakMesh Radio Kit Sales & Assembly Compliance Plan

## Overview

This document outlines NATakMesh's compliance strategy for selling modular Raspberry Pi–based WiFi/HaLow mesh radio kits with an optional customer-authorized assembly service. The approach ensures conformity with FCC rules for intentional radiators while offering convenience to customers.

---

## Product Strategy

### Primary Product: **Mesh Radio Kit (Unassembled)**

- Includes all necessary hardware.
- Ships with:
  - **Radio module physically installed but electrically disconnected**
  - **Antennas unattached**
  - **No internal power source**
- Requires:
  - **User to open enclosure, plug in radio module, attach antennas, and connect external power**
- Marketed as:
  - For **experimental/amateur use**
  - **Not operational as shipped**

### Optional Add-on: **Assembly Service**

- Sold as a **separate service**.
- Must be purchased **in the same order** as the kit.
- Requires customer **authorization** at checkout.
- NATakMesh performs:
  - Radio connection
  - Antenna attachment
  - Final case reassembly

---

## Regulatory Compliance

### FCC Framework

Under FCC Part 15:

> Devices capable of RF transmission "as shipped" are considered intentional radiators and require certification.

### Our Position

- The kit **is not RF-capable as sold**.
- Assembly only occurs **after purchase** and **with customer consent**.
- Final units are **custom assemblies of the customer’s property**.
- Therefore, the product does **not qualify as a marketed transmitter** under FCC rules and **does not require system-level certification**.

---

## Shop Implementation (Odoo)

### Product: Mesh Radio Kit

**Type:** Storable Product  
**Description:**
```
This kit includes all components to build a NATakMesh mesh radio node.

⚠️ Sold as a non-operational kit. Cannot transmit RF as shipped. 
Radio module is disconnected, no power source is included, and antennas are not attached.

For experimental and amateur use only. Buyer is responsible for lawful operation under FCC rules.

Need it assembled? Add the separate “Assembly Service” to your order.
```

---

### Product: Assembly Service

**Type:** Service  
**Description:**
```
By purchasing this service, you authorize NATakMesh to assemble your purchased Mesh Radio Kit.

Assembly includes:
- Radio module connection
- Antenna installation
- Final enclosure sealing

This service is only valid when purchased with a radio kit. 
Assembled units are custom builds of your property. Buyer is responsible for RF compliance.
```

---

### Terms & Conditions (Checkout)

Enable **Terms & Conditions** in Odoo Website settings.  
Suggested text:

```
I understand that the Mesh Radio Kit is sold unassembled and cannot transmit RF as delivered.

By purchasing the optional Assembly Service, I authorize NATakMesh to assemble the kit on my behalf. 
I accept responsibility for ensuring lawful RF use under applicable FCC rules.
```

---

### Invoice Language

Add to invoice template or individual sales orders:

```
Assembly Service Authorized: Customer requested and authorized post-sale assembly of their kit. 
Device remains customer property. Customer assumes responsibility for legal RF operation.
```

---

## Summary

This structure ensures:
- Compliance with FCC regulations
- Flexibility for end-users
- Legal protection for NATakMesh

By separating kit sales from RF-capable assembly, and requiring explicit customer authorization, NATakMesh minimizes regulatory exposure while offering a complete solution to customers.
