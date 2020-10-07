# inline_l2

## Requirements
AD server running to have DNS resolution.

## Global config steps
1. Configure sixth interface as inline interface with NAT, DHCP, DNS and NetFlow
1. [ ] Configure SNAT (inline) in Network Configuration-> Inline menu) on
       first interface (configured as dhcp-listener), not management.
1. Restart haproxy-port, pfdns, iptables, pfdhcp, pfdhcplistener and pfacct services

## Scenario steps
- [ ] Check online status of node01 in Nodes menu: valid NetFlow

## Teardown steps
Add steps

## Additional notes
NAT should be enabled because traffic on vagrant-libvirt interface is only
allowed for IP in this subnet.