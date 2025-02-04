import {NgModule} from '@angular/core';
import {
  Heart,
  Lock,
  Award,
  Globe,
  Package,
  Monitor,
  ArrowRight,
  Menu,
  X,
  Home,
  Zap,
  Share2,
  Layers,
  Users,
  BellOff,
  Share,
  Maximize2,
  ChevronRight,
  Mail,
  Tag,
  Printer
} from 'angular-feather/icons';
import {FeatherModule} from "angular-feather";

@NgModule({
  imports: [FeatherModule.pick({
    Lock, Award, Globe, Package, Heart, Monitor, ArrowRight, Menu, X, Home,
    Zap, Share2, Layers, Users, BellOff, Share, Maximize2, ChevronRight, Mail, Tag, Printer
  })],
  exports: [FeatherModule]
})
export class IconsModule
{
}
