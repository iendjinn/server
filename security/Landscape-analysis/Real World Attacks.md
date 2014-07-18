## Structured Analysis

Classsification and analysis of documented IoT attacks

## - Attacks in the news

### 1. 'Wake up baby': Man hacks into 10-month-old's baby monitor to watch sleeping infant/ Hack turns Belkin baby monitor into iPhone-controlled bugging device

**Domain:** Home

**Description:** A vulnerable wireless camera of a baby monitor was hacked enabling the attacker to monitor people in the room.

**Vulnerabilities:**
* One-time access is the sole determinant for authenticating a device <br>
- After initial connection of the WeMo baby monitor to a home Wi-Fi network, and access from an iPhone/iPad app over the same network, the iPhone has unfettered access to all audio picked up by the monitor. Access to the home Wi-Fi network isn't necessary for the app to work after initial setup; all conversations within earshot of the monitor can be tapped as long as the iPhone or iPad has an Internet connection. This gives an attacker remote access to the monitor even halfway across the world. All an attacker has to do is get access to the home Wi-Fi network just once.
* Lack of password authentication for accessing the monitor.
* The devices operate on the premise that they're not running in an environment where even one connected device is compromised. This essentially means that the security of a WeMo monitor depends on securing the home Wi-Fi network password.
* The same mechanism that authorizes an iPhone that connects to a WeMo even once can be abused by malware to give virtually any Internet-connected device remote bugging capabilities.
<br> - It was found that it is trivial for any computer that is already infected to obtain the credentials to tap the audio feed of a WeMo baby monitor connected to the same home network.
* A weakness in another Belkin product, the Belkin Wi-Fi NetCam, was also found. While the NetCam requires a password to access video feeds, even by users on the same Wi-Fi network, the password is transmitted in plaintext to a server at the IP address 66.160.133.67. This once again makes it trivial for machines already infected with malware to retrieve the password and tap in to the video feed.

**Implications for MXD:**

* Need for securing the mobile device the baby monitor connects to.
* Securing the network perimeter.
* Need for regular firmware updates.
* Implications of using default passwords.
* Intrusion of privacy and threats to personal safety.
* Possible entry point into network for spread of malware, launch of further attack.

**Mitigations:**

* The perimeter strategy to security is ineffective. The endpoint devices must strive to protect their own stack rather than rely on their network segment being completely trustworthy.
* A smartphone or any other devce connecting to the home network should be authenticated upon each access.
* All devices on the home network should be password protected.
* Ensure adequate encryption of credential data in storage and transit.

**Source:** http://www.mirror.co.uk/news/world-news/man-hacks-10-month-olds-baby-monitor-3468827
http://arstechnica.com/security/2013/10/hack-turns-belkin-baby-monitor-into-iphone-controlled-bugging-device/

### 2. Belkin WeMo smart home networks in danger of hacks

**Domain:** Home

**Description:** Researchers warn that more than 500,000 home automation devices have vulnerabilities that would allow attackers to remotely take control of thermostats, lighting, sprinkler systems, and more. The reserachers uncovered several vulnerabilities in Belkin WeMo devices, which would let hackers gain access to home networks and remotely control Internet-connected appliances.
<br> Many of Belkin's WeMo home automation products let users build their own smart home solutions by adding Internet connectivity to any device. Once connected, users can control their appliances with a smartphone from anywhere in the world. However, hackers could also get into these networks.

**Vulnerabilities:**

* Not enough encryption controls built in.
* Vulnerability that allows hackers to impersonate Belkin's encryption keys and cloud services to push malicious firmware updates and capture credentials at the same time.
* No password set on telnet with root access
*	Private undocumented web interface
*	Public hard coded username and password

**Fixed vulnerabilities:**
* WeMo API server updated to prevent an XML injection attack from gaining access to other WeMo devices
* WeMo firmware updated with added SSL encryption 
* Elimination of storage of the signing key on the device
* Serial port interface password protected to prevent a malicious firmware attack.

**Implications for MXD:**

* Ease of monitoring and conrolling home networks.
* Malicious firmware updates can be used to gain access to other devices, like laptops and smartphones.
* Motion sensors used by WeMo devices  can be used by an attacker to remotely monitor occupancy within the home.
* Belkin's WeMo home automation products let users build their own smart home solutions by adding Internet connectivity to any device leading to an increased possibility of attack.

**Mitigations:**

* Proper configuration
* Proper crypto implementation (most hacks attack the implementation of the crypto algorithm)
* Eliminate storage of keys on device
* No password set on telnet with root access
*	Password protect the home Wi-Fi network
*	Avoid using default username and password

**Source:** http://www.cnet.com/uk/news/belkin-wemo-smart-home-networks-in-danger-of-hacks/
<br> http://disconnected.io/2014/04/04/universal-plug-and-fuzz/
<br> http://disconnected.io/2014/04/16/new-belkin-wemo-module/

### 3. Hacker will expose potential security flaw in 4 million hotel room keycard locks

**Domain:** Home

**Description:** Vulnerabilities discovered in hotel room locks from the manufacturer Onity indicate that with a few hacker tricks and a handful of cheap hardware, the DC power port under the keycard lock might offer access to your room just as completely as your keycard.
<br>Using an open-source hardware gadget built for less than $50, an attacker can insert a plug into the DC port, bypass the card reader, and open the Onity door lock in a matter of seconds.
The exploit works by spoofing a portable programming device that controls a facility’s locks and sets which master keys open which doors. The portable programmer, which plugs into the DC port under the locks, can also open any door, even providing power through that port to trigger the mechanism of a door lock in which the battery has run out.

**Vulnerabilities:**

* The system’s vulnerability arises from the fact that every lock’s memory is entirely exposed to whatever device attempts to read it through that port. 
* The cryptographic key that’s required to trigger the door lock’s open mechanism is also stored in the lock’s memory, accessible by the spoofed portable device.
* Use of a weak encryption scheme that allows an attacker to derive the “site code”–a unique numerical key for every facility–from two cards encoded one after another for the same room. By reading the encrypted data off of two cards and testing thousands of potential site codes against both cards until the decoded data displays a predictable interval between the two, an attacker can find the site code and use it to create more card keys with a magnetizing device. But given that he can only create more cards for the same room as the two keys he’s been issued, that security flaw represents a fairly low risk compared with the ability to open any door arbitrarily.

**Implications for MXD:**

* Intrusion of privacy and threats to personal safety.

**Mitigations:**

* Protection of lock memory and cryptographic keys storeed therein.
* Use of adequately secure encryption schemes.

**Source:** http://www.forbes.com/sites/andygreenberg/2012/07/23/hacker-will-expose-potential-security-flaw-in-more-than-four-million-hotel-room-keycard-locks/

### 4. Hacking into Internet Connected Light Bulbs

**Domain:** Home 

**Description:**  LIFX bulbs connect to a WiFi network in order to allow them to be controlled using a smart phone application. In a situation where multiple bulbs are available, only one bulb will connect to the network. This “master” bulb receives commands from the smart phone application, and broadcasts them to all other bulbs over an 802.15.4 6LoWPAN wireless mesh network.

In the event of the master bulb being turned off or disconnected from the network, one of the remaining bulbs elects to take its position as the master and connects to the WiFi network ready to relay commands to any further remaining bulbs. This architecture requires only one bulb to be connected to the WiFi at a time, which has numerous benefits including allowing the remaining bulbs to run on low power when not illuminated, extending the useable range of the bulb network to well past that of just the WiFi network and reducing congestion on the WiFi network.

**Device Specifications**

802.15.4 6LoWPAN wireless mesh network of bulbs that connect to a Wi-Fi network via a master bulb that receives commands from a smart phone application.

The PCB is made up primarily of two System-on-Chip (SoC) Integrated Circuits (ICs): a Texas Instruments CC2538 that is responsible for the 6LoWPAN mesh network side of the device communication; and a STMicroelectronics STM32F205ZG, which is responsible for the WiFi side of the communication. Both of these chips are based on the ARM Cortex-M3 processor. 

**Details of exploit**

In order to monitor and inject 6LoWPAN traffic, a peripheral device which uses the 802.15.4 specification was used - ATMEL AVR Raven installed with the Contiki 6LoWPAN firmware image. This presents a standard network interface from which to monitor and inject network traffic into the LIFX mesh network.

The protocol observed appeared to be, in the most part, unencrypted. This allowed the researchers to easily dissect the protocol, craft messages to control the light bulbs and replay arbitrary packet payloads.

Monitoring packets captured from the mesh network whilst adding new bulbs, they were able to identify the specific packets in which the WiFi network credentials were shared among the bulbs. <br> - The on-boarding process consists of the master bulb broadcasting for new bulbs on the network. A new bulb responds to the master and then requests the WiFi details to be transferred. The master bulb then broadcasts the WiFi details, encrypted, across the mesh network. The new bulb is then added to the list of available bulbs in the LIFX smart phone application.

Further analysis of the on-boarding process identified that we could inject packets into the mesh network to request the WiFi details without the master bulb first beaconing for new bulbs. Further to this, requesting just the WiFi details did not add any new devices or raise any alerts within the LIFX smart phone application.

An analysis identified that an AES implementation was being used. Which meant that if the pre-shared key can be obtained from one device, it can be used to decrypt messages sent from all other devices using the same key. In this case, the key could be used to decrypt encrypted messages sent from any LIFX bulb.

**Vulnerabilities:**

* The protocol, in most part, was unencrypted, allowing for easy dissection and analysis of the protocol and subsequent packet injection into the network traffic.
* Packets could be injected into the mesh network to request the WiFi details without the master bulb first beaconing for new bulbs. Further to this, requesting just the WiFi details did not add any new devices or raise any alerts within the LIFX smart phone application.
* Armed with knowledge of the encryption algorithm, key, initialization vector and an understanding of the mesh network protocol an attacker could inject packets into the mesh network, capture the WiFi details and decrypt the credentials, all without any prior authentication or alerting of presence. 

**Patched Vulnerabilities**

The fix, which is included in the new firmware encrypts all 6LoWPAN traffic, using an encryption key derived from the WiFi credentials, and includes functionality for secure on-boarding of new bulbs on to the network.

**Implications for MXD:**

* Obtaining WiFi details by packet injection without prior authentication.
* Possible entry point into network for spread of malware, launch of further attack.
* Ability to cause chaos(blackouts)

> It should be noted, since this attack works on the 802.15.4 6LoWPAN wireless mesh network, an attacker would need to be within wireless range, ~30 meters, of a vulnerable LIFX bulb to perform this attack, severely limiting the practicality for exploitation on a large scale.

**Mitigations:**

* Provision to prevent packet injection into the mesh network to request the WiFi details, without the master bulb first beaconing for new bulbs. 
* Adequate encryption of the 6LoWPAN traffic.

**Source:** http://www.contextis.co.uk/blog/hacking-internet-connected-light-bulbs/
<br> http://arstechnica.com/security/2014/07/crypto-weakness-in-smart-led-lightbulbs-exposes-wi-fi-passwords/

### 5.Of course hackers made your smart fridge and TV send malicious emails

**Domain:** Home

**Description:** Waves of malicious email, typically sent in bursts of 100,000, three times per day, targeting enterprises and individuals worldwide were seen. Of those, more than 25% originated from Internet of things devices that were hacked for the purpose, instead of traditional “laptops, desktop computers or mobile devices.” No more than 10 emails were initiated from any single IP address, making the attack difficult to block based on location

In this case, hackers broke into more than 100,000 everyday consumer gadgets that were connected to the internet, such as home-networking routers, connected multimedia centres, televisions, and at least one refrigerator.

The botnet, which included Smart TVs and smart fridges, delivered more than 750,000 malicious emails. Hackers were apparently able to also compromise routers and multimedia centres connected to the web to deliver the attacks.

**Vulnerabilities:**

* Misconfiguration and the use of default passwords left the devices completely exposed on public networks, available for takeover and use.
* These devices are typically not protected by the anti-spam and anti-virus infrastructures.

**Implications for MXD:**

* Use of devices in the home as bots in delivering a larger cyber attack

**Mitigations:**

* Proper device configuration and use of strong passwords
* Possibility of built in anti-virus?

**Source:** http://bgr.com/2014/01/20/smart-tvs-fridge-hacked/

### 6. The gadget that can hack any CAR: Terrifying £12 tool can remotely control headlights, locks, steering and even brakes

**Domain:** Automotive

**Description:** Cars that come with built-in software running on an operating system are vulnerable to attack. The CAN Hacking Tool (a gadget that is smaller than a mobile phone) has four wires that are attached to the different outputs of a car's Controller Area Network. The device can be fitted to any car's Controller Area Network 'within minutes' and run malicious code through the vehicle's system, gaining contro of the locks, steering and brakes.

**Vulnerabilities:**

* Vulnerabilities in the CAN bus, the heart of the car that communicates with everything from the windshield wipers to the engine.
* Lack of adequate authentication.
* The computer code in cars is outdated. It's similar to the on/off switches used in industrial controls. It's easily manipulated.
* Internet connectivity means that physical access will not be needed to hijack control of a car.

> Car software is not built to the same standards as, say, a bank application. Or software coming out of Microsoft.

**Implications for MXD:**

* Ease of bypassing encryption and obtaining control of the car’s Controller Area Network
* Physical security implications of an attacker being able to disable the brakes, lock the car doors and disable the alarm.
* Bluetooth bugs in the system which can be exploited to send remote code executions from a mobile device. 

**Mitigations:**

* Built-in firewalls to prevent malicious tampering.
* Adequate authentication.

**Source:** http://www.dailymail.co.uk/sciencetech/article-2553026/The-gadget-hack-CAR-Terrifying-12-tool-remotely-control-headlights-locks-steering-brakes.html
<br> http://money.cnn.com/2014/06/01/technology/security/car-hack/

### 7. When ‘Smart Homes’ get hacked: I Haunted a complete stranger’s house via the internet

**Domain:** Home

**Description:** Compared with the houses many of us grew up in, smart homes are intellectual giants. With these homes, smartphones can control everything from the security system to the television, and doors can be unlocked with the touch of a fingerprint. In a hack on eight random homes, sensitive information was revealed – not just what appliances and devices people had, but their time zone (along with the closest major city to their home), IP addresses and even the name of a child.

**Vulnerabilities:**

* Ability to see all of the devices in a home and control them.
<br> - These systems are crawl-able by search engines.
* Lack of authentication( usernames and passwords not required by default)
<br> - No authentication between the handheld and any of the control commands.
<br> - No authentication once access to Wi-Fi network has been gained.
* Revelation of sensitive information- time zone (along with the closest major city to their home), IP addresses and even the name of a child. 
* Lack of authentication meant that anyone who figured out the IP address for vulnerable systems could get access to and control of people’s homes.
* Storage of device configuration in the cloud.

**Implications for MXD:**

* Ease of disabling alerts and creating fake alerts
* Physical security implications- burglary target
* Ability to turn attacked homes into haunted houses, energy-consumption nightmares, or even robbery targets. Opening a garage door could make a house ripe for actual physical intrusion.
* Enough information to link the homes on the Internet to their locations in the real world.

**Mitigations:**

* Requirement for password protection by default.
* Secure storage of device configuration in the cloud.

**Source:** http://www.forbes.com/sites/kashmirhill/2013/07/26/smart-homes-hack/

### 8. Alarm bells ring for Internet of Things after smart TV hack

**Domain:** Home

**Description:** A team of scientists claim that hybrid smart TVs that blur the line between televisions and the internet are vulnerable to a simple hack. Smart TVs can be hacked using a cheap antenna and broadcast messages. The attck relies on an insecurity in the Hybrid Broadcast-Broadband Television Standard (HbbTV).

HbbTV allows the addition of interactive HTML content to DVB cable, satellite or terrestrial signals. This means that viewers can use their favourite web services via TV apps, and allows advertisers to serve up relevant ads.
The standard is vulnerable to an exploitation technique called the “Red Button attack”-- named after the red button used on modern smart TV remotes to access additional content -- that allows a hacker to intercept the sound, picture and accompanying data sent by the broadcaster using the data packets, and then takeover apps on the TV or even launch attacks across the Internet.  On Facebook, for example, the hacker could log in and post messages to the social network on the person's behalf. 

**The Exploit**

Involves hacking the radio signal through the use of an antenna, hackers ‘become the broadcaster' and even have the ability to hack into anything sent or received by the consumer. 

This would be done by using a simple amplifier, costing as little as £150 ($250) on a rooftop to hijack networks across an area of 0.5 square miles (1.4 square kilometres).
Alternatively, a transmitter could also be placed on a drone, which could hover outside the windows of houses to hijack TVs. The attackers could also set up a transmitter on a roof to potentially hijack tens of thousands of TVs across an entire city.
In doing so, the hacker would have access to any websites the viewer was logged into on their smart TV.
This could range from getting access to their Facebook accounts to writing fake reviews on websites for products.

**Vulnerabilities:**

* While the impact of many of these attacks is exacerbated by poor implementation choices, for most attacks the core of the problem lies with the overall architecture, as defined in the specification itself.
<br> This particular attack relies on an insecurity in the HbbTV standard.
* This weakness could allow such attacks as man-in-the-middle, watering holes or the ability to change what users watch on TVs.
* HbbTVs broadcasts can be hijacked because they are not linked to a web server, which also makes attacks virtually untraceable.

**Implications for MXD:**

* MiTM attack, with hackers placing themselves between the consumer and the broadcaster and injecting their own information into the broadcast stream.
* The attack does not require either an internet address or a server.
* Attackers can use this insecure medium to get access to the target's internet accounts.
<br> - Someone using a smart TV could find their various internet accounts sending spam, printing coupons and writing fake reviews without their knowledge. 
Hackers could, in theory, also use these accounts to harvest personal information.
* This enables a large-scale exploitation technique with a localised geographical footprint based on radio frequency (RF) injection.

> This ‘requires a minimal budget and infrastructure and is remarkably difficult to detect.’
‘In a dense urban area, an attacker with a budget of about $450 (£270) can target more than 20,000 devices in a single attack.’

> “After hacking the radio signal, hackers ‘become the broadcaster' and even have the ability to hack into anything sent or received by the consumer. One problem with such an attack is that, since it would involve hacking into the radio signal through the use of an antenna, it would be difficult to track down the attackers. It's reminiscent of someone sniffing the traffic on a public Wi-Fi hotspot or setting up a fake one.”

**Mitigations:**

* There are a number of possible solutions. The most drastic includes cutting all internet access to smart TVs.
* Alternatively, broadcasters could begin to integrate smart TVs into a network that could see if they are being hijacked by monitoring for high spikes in signal strength.
* The most simple solution, though, would be to have a confirmation box pop-up on screen when a viewer’s smart TV is trying to open an app such as Facebook.

**Source:** http://www.scmagazineuk.com/alarm-bells-ring-for-internet-of-things-after-smart-tv-hack/article/354900/
<br> http://www.dailymail.co.uk/sciencetech/article-2652734/Is-smart-TV-risk-attack-Hackers-exploit-flaw-red-button-feature-hijack-web-accounts-steal-information.html

### 9. Hacking Traffic Systems for fun and chaos

**Domain:** Automotive/Traffic control system

**Description:** Traffic control systems are vulnerable to a number of attacks and can be exploited quite easily from up to a mile or 2 away and perhaps could be used to spread malware from device to device. <br>
It’s also possible to cause electronic signs to display incorrect speed limits and instructions and to make ramp meters allow cars on the freeway faster or slower than needed. The attack was carried out by intercepting the signal between sensors in the pavement and the traffic control centre.

**The exploit**

The hacker mounted a Sensys Networks wireless transmitter to a drone, and found he could intercept data being fed to traffic control systems from 50 metres away.
He then attached an antenna to the USB-drive-sized transmitter and found he could be 500 metres from a light and still intercept the data.
 
The issue was found in devices that communicate with traffic control systems, not the actual systems controlling traffic lights themselves.

**Vulnerabilities:**

* Unencrypted communications between devices that communicate with traffic control systems and the traffic control system itself.
* Lack of authentication to access these devices(sensors on pavements).
* Self-replicating malware can be used to infect the vulnerable controllers and spread device to device. The compromised systems can be used to launch attacks against traffic control systems at a later date.

> It might be possible to create self-replicating malware (worm) that can infect these vulnerable devices in order to launch attacks affecting traffic control systems later. The exploited device could then be used to compromise all of the same devices nearby.

**Implications for MXD:**

* Compromising a traffic control system and injecting data in the system. 
* Ability to control and manipulate traffic lights, electronic signs on highways has dangerous implications on personal road safety.
* An attacker could cause road chaos by launching an attack with a simple exploit programmed on cheap hardware ($100 or less). The attack could even be launched from a drone flying overhead.
<br>- An attacker could potentially trick the system into changing lights or stalling on red lights.
* These traffic problems could cause real issues, even deadly ones, by causing accidents or blocking ambulances, fire fighters, or police cars going to an emergency call.
* Since the devices don't require authentication, attackers can conceivably alter the firmware to make them unable to communicate with the rest of the system.

**Mitigations:**

* Manual overrides and secondary controls could be used if anomalies are detected.

**Source:** http://threatpost.com/hacking-traffic-systems-for-fun-and-chaos

### 10. Philips Hue LED smart lights hacked, home blacked out by security researcher/ Welcome to the “Internet of Things,” where even lights aren’t hacker safe

**Domain:** Home

**Description:** Using a malware script, the Hue installation was hacked into and issued a blackout command through the bridge (the Hue’s router) turning the connected lights out entirely. 
In this case the malware script runs continuously, so the bulbs are commanded to turn off immediately after they are powered up.
The highly connected Hue can be attacked through multiple vectors, including links on Facebook or by theoretically finding a flaw in the radio protocol (Zigbee Light Link). 

**Vulnerabilities:**

* Hue lighting system was intentionally designed to grant access to any device connected to a user's home network.
<br> - Company designers went about doing this by using security tokens that are generated without requiring a user to press a special authentication button on the wireless bridge of the system.

* The Philips wireless controller uses a weak authentication system to receive commands from trusted smartphones and computers. It consists of a security token containing the device's unique media access control identifier that has been cryptographically hashed using the MD5 hash algorithm. These hardware addresses are trivial to detect by anyone on the same network or often by people within radio range of a device, making them unsuitable for authentication. 


**Exploit**

The exploit is in the form of Java code that can be delivered when browsing compromised websites or websites dedicated to serving attack pages. It combs through the address resolution protocol cache of a local network to find all connected devices. The exploit then runs the MAC address of each discovered device through the MD5 hash algorithm and includes the output in a security token used to send commands to the light controller. If a command is successfully executed, the exploit will repeat the successful command over and over. If a command doesn't succeed, the malware will register a new token every second or so using a different MAC address until a valid one is found. 

**Implications for MXD:**

* Creation of a localised blackout <br>-the ability of an intruder to remotely shut off lighting in locations such as hospitals and other public venues can result in serious consequences. 
<br>- The vulnerability can be exploited to create a blackout that lasts as long as the lights are connected to the wireless control bridge. Even disabling the smartphone or computer the exploit abuses to take control of the system may not be enough to turn the lights back on if there are other devices on the network that have already been authenticated.


**Mitigations:**


**Source:** http://www.extremetech.com/electronics/163972-philips-hue-led-smart-lights-hacked-whole-homes-blacked-out-by-security-researcher
<br> http://arstechnica.com/security/2013/08/philips-hue-lights-malware-hack/

### 11. It’s Insanely Easy to Hack Hospital Equipment

**Domain:** Health

**Description:** Drug infusion pumps that can be remotely manipulated to change the dosage doled out to patients; Bluetooth-enabled defibrillators that can be manipulated to deliver random shocks to a patient’s heart or prevent a medically needed shock from occurring; X-rays that can be accessed by outsiders lurking on a hospital’s network; temperature settings on refrigerators storing blood and drugs that can be reset, causing spoilage; and digital medical records that can be altered to cause physicians to misdiagnose, prescribe the wrong drugs or administer unwarranted care. These are just some of the things that could go wrong if a hospital is hacked into. <br> Attackers could also blue-screen devices and restart or reboot them to wipe out the configuration settings, allowing an attacker to take critical equipment down during emergencies or crash all of the testing equipment in a lab and reset the configuration to factory settings.<br> Storage systems for X-rays and other images were equally vulnerable. These are generally backed up in centralized storage units that require no authentication to access. 

**Vulnerabilities:**


**Implications for MXD:**

* Lack of authentication to access or manipulate the equipment
* Use of weak passwords or default and hardcoded vendor passwords
* Use of embedded web servers and administrative interfaces that make it easy to identify and manipulate devices once an attacker finds them on a network.
* Inadequate/lack of air gapping devices
* Unauthenticated or unencrypted communication between the devices, leading to threat of misdiagnosis or wrong prescription.
* Hackers could gain access to the devices by infecting an employee’s computer via a phishing attack, then exploring the internal network to find vulnerable systems.
* A hacker who happens to be in the hospital could also simply plug his laptop into the network to discover and attack vulnerable systems.
* Once in the system, an attacker can turn off the email pager notification features or alter the settings to change when an alert is sent.
* Replay attacks of data passing from medical devices to patient records

**Mitigations:**


**Source:** http://www.wired.com/2014/04/hospital-equipment-vulnerable/

### 12. Renewable Energy’s Expansion Exposing Grids to Hacking

**Domain:** Energy

**Description:** The communication networks and software that link green energy sources to the grid as well as the electronic meters that send real time power usage to consumers and utilities are providing new back-door entry paths for computer hackers to raise havoc with the grid. <br>  Every meter being deployed in the U.K. has a “relay” that can disconnect a household from the power supply. This is controlled by the utility from a computer keyboard. Since the same code goes into all meters, it would take just one small piece of code inserted by a rogue programmer to disconnect the power from millions of meters and disable the remote connection to the utility. <br> The “Dragonfly” hackers used a French website of a clean power provider as a “watering hole,” where victims from the targeted company visit and pick up infected code. They were able to compromise industrial control systems and install malware that can replicate itself and spread to other computers.

**Vulnerabilities:**


**Implications for MXD:**

* Ability to manipulate or disconnect the power from millions of meters and disable the remote connection to the utility.
* Watering hole attack that leads to an exploit being downloaded onto a target system to be used in the spread of malware.

**Mitigations:**


**Source:** http://www.bloomberg.com/news/2014-07-01/renewable-energy-s-expansion-exposing-grids-to-hacking.html


## - Black Hat/ DEFCON list of attacks

### 1. Home insecurity: No alarms, False alarms, and Sigint

**Domain:** Home 

**Description:** A home security system with wireless connectivity allows for an increase in usability and minimal home modification. In does not however, make for a more secure home.

**Vulnerabilities:**

**Implications for MXD:**

* Ease of creating false alarms
* Ease of suppressing alarms
* Ability to track user movements within a home

**Mitigations:**

**Source:** https://www.blackhat.com/us-14/briefings.html

### 2. Learn how to control every room at a luxury hotel remotely: The dangers of insecure home automation deployment

**Domain:** Home
**Description:** A room remote control with a flawed home automation protocol that enables a remotely located attacker (even in another country) to control virtually every appliance in a hotel: the lighting, temperature, music, TV etc.  This can be done by exploiting flaws and reverse engineering the KNX/IP home automation protocol, as well as by scripting a Trojan which can send commands outside the hotel.

**Vulnerabilities:**

**Implications for MXD:**

* Improvisation of home automation architectures 
* Dangers of employing widely used legacy protocols
* Security implications of using an insecure wireless connection
* Danger of using insecure, unlocked commodity hardware

**Mitigations:**

**Source:** https://www.blackhat.com/us-14/briefings.html

### 3. Smart nest thermostat: A smart spy in your home

**Domain:** Home
**Description:** Smart home automation devices, such as the Nest thermostat are designed to optimise power usage by learning user scheduling and power consumption patterns. Although equipped with OS level security checks, a hardware attack can bypass firmware signing and allow for a backdoor to be built into the Nest software, giving an attacker access to saved data, including WiFi credentials. The Nest can be rooted by loading a custom compiled kernel via a USB connection within a matter of seconds, allowing the attacker to monitor user behaviour and explore vulnerabilities in software protocols such as Nest Weave. A rooted device can also enable an attacker to plant rootkits, spyware and use rogue services and network scanning methods to study and further compromise the network.

**Vulnerabilities:**

**Implications for MXD:** 

* Ease of bypassing OS level security checks on devices via hardware attacks
* Use of a rooted device to install rootkits, spyware and launch other network scanning attacks

**Mitigations:**

**Source:** https://www.blackhat.com/us-14/briefings.html

### 4. Weaponizing your pets: The War Kitteh and the Denial of Service dog

**Domain:** Home

**Description:** A GPS device embedded collar can track a cat’s movements throughout a neighbourhood.  Fitted with a WiFi sniffing device, this collar can now be used to intercept and steal data from IoT devices in homes. This basic premise can be adapted to load a doggie backpack with equipment such as a WiFi Pineapple to launch attacks such as a denial of service.

**Vulnerabilities:**

**Implications for MXD:**

* Security implications over the ease of engendering readily available everyday objects with wireless data sniffing and attack capabilities

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 5.Home alone with localhost: Automating home defense

**Domain:** Home

**Description:** 

**Vulnerabilities:**

**Implications for MXD:**

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 6. Practical aerial hacking & surveillance

**Domain:** Home/ individual profiling

**Description:** Unmanned aerial vehicles (UAVs) with added hacking and surveillance devices can be used to track and profile individuals, as well as attack infrastructure.  A drone like Snoopy can passively collect information leaked from wireless devices such as smartphones, as well as optionally interrogate devices for further information.

**Vulnerabilities:**

**Implications for MXD:**

* Tracking and surveillance capabilities that can both passively collect data and actively probe for further information wirelessly

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 7.The internet of fails: Where IoT has gone wrong and how we’re making it right

**Domain:** 

**Description:**

**Vulnerabilities:**

**Implications for MXD:**

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 8.A survey of remote automotive attack surfaces

**Domain:** Automotive

**Description:** An attacker that hacks an automotive network can eavesdrop on communications by enabling a microphone, as well as perpetrate disaster by disabling the brakes. Examining the automotive network of different manufacturers enables exploring the security capabilities of the different automotive networks to build in better security controls.

**Vulnerabilities:**

**Implications for MXD:**

**Mitigations:**

**Source:** https://www.blackhat.com/us-14/briefings.html

### 9.Attacking the internet of things using time

**Domain:**

**Description:** Slow, resource constrained IoT devices are the perfect target for network-based timing attacks, which allows an attacker to brute-force credentials one character at a time, rather than guessing the entire string at once.

**Vulnerabilities:**

**Implications for MXD:** 

* Ease of conducting a timing based brute force attack on resource constrained IoT devices

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 10. Hack all the things: 20 devices in 45 minutes

**Domain:** Home

**Description:** Attacking internet connected IoT devices is a matter of running unsigned kernels on rooted devices.  This means that everything from TVs, baby monitors, media streamers, network cameras, home automation devices and VoIP gateways are insecure.

**Vulnerabilities:**

**Implications for MXD:**

* Security implications of an attacker being able to root a target device and run an unsigned kernel

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 11. The monkey in the middle: A Pentesters guide to playing in traffic

**Domain:** 

**Description:** Mallory, a TCP/UDP MiTM proxy can run as a gateway for a victim network, collect session information and passwords, direct traffic to your proxy and edit traffic as it goes by.

**Vulnerabilities:**

**Implications for MXD:**

**Mitigations:**

**Source**: https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 12.Just what the doctor ordered?

**Domain:** Healthcare

**Description:** With security standards not being a requirement for medical device manufacturers, healthcare devices (many of which are internet facing) are vulnerable to strategic attack with the potential loss for human life.

**Vulnerabilities:**

**Implications for MXD:**

* Security implications of inadequate air gapping

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 13.Elevator hacking - From the pit to the penthouse

**Domain:** Home

**Description:** An elevator is virtually no different than an unlocked staircase as far as building security is concerned and is increasingly being used by attackers to bypass building security systems.

**Vulnerabilities:**

**Implications for MXD:**

* Ease of subverting security in various facilities.

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html

### 14.USB for all!

**Domain:** 

**Description:** With the prominence of USB in IoT devices and further capabilities such as Device Firmware Update, USB On-The-Go and debug over USB, the attack surface of USB enabled devices is ever growing. 

**Vulnerabilities:**

**Implications for MXD:**

* Vulnerability of USB enabled devices to traffic interception and manipulation

**Mitigations:**

**Source:** https://www.defcon.org/html/defcon-22/dc-22-speakers.html
