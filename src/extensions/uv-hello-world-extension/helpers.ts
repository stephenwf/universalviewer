import {FooterPanel} from "../../modules/uv-shared-module/FooterPanel";
import {HeaderPanel} from "../../modules/uv-shared-module/HeaderPanel";
import {HelpDialogue} from "../../modules/uv-dialogues-module/HelpDialogue";
import {MoreInfoRightPanel} from "../../modules/uv-moreinforightpanel-module/MoreInfoRightPanel";
import {ResourcesLeftPanel} from "../../modules/uv-resourcesleftpanel-module/ResourcesLeftPanel";
import {SettingsDialogue} from "../../modules/uv-dialogues-module/SettingsDialogue";
import {ShareDialogue} from "../../modules/uv-dialogues-module/ShareDialogue";
import {Shell} from "../../modules/uv-shared-module/Shell";

export function defaultModuleInstall(context: any) {
  if (context.isHeaderPanelEnabled()) {
    context.headerPanel = new HeaderPanel(Shell.$headerPanel);
  } else {
    Shell.$headerPanel.hide();
  }

  if (context.isLeftPanelEnabled()) {
    context.leftPanel = new ResourcesLeftPanel(Shell.$leftPanel);
  }

  if (context.isRightPanelEnabled()) {
    context.rightPanel = new MoreInfoRightPanel(Shell.$rightPanel);
  }

  if (context.isFooterPanelEnabled()) {
    context.footerPanel = new FooterPanel(Shell.$footerPanel);
  } else {
    Shell.$footerPanel.hide();
  }

  context.$helpDialogue = $('<div class="overlay help" aria-hidden="true"></div>');
  Shell.$overlays.append(context.$helpDialogue);
  context.helpDialogue = new HelpDialogue(context.$helpDialogue);

  context.$shareDialogue = $('<div class="overlay share" aria-hidden="true"></div>');
  Shell.$overlays.append(context.$shareDialogue);
  context.shareDialogue = new ShareDialogue(context.$shareDialogue);

  context.$settingsDialogue = $('<div class="overlay settings" aria-hidden="true"></div>');
  Shell.$overlays.append(context.$settingsDialogue);
  context.settingsDialogue = new SettingsDialogue(context.$settingsDialogue);

  if (context.isLeftPanelEnabled()){
    context.leftPanel.init();
  }

  if (context.isRightPanelEnabled()){
    context.rightPanel.init();
  }
}
