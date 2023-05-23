import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { defineComponents, IgcRadioComponent, IgcRadioGroupComponent } from 'igniteui-webcomponents';

defineComponents(IgcRadioGroupComponent, IgcRadioComponent);

@customElement('app-view2')
export default class View2 extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .radio-group {
      width: max-content;
      height: max-content;
    }
    .radio {
      padding: 8px;
    }
  `;

  render() {
    return html`
      <link rel='stylesheet' href='../../ig-theme.css'>
      <igc-radio-group alignment="horizontal" class="radio-group">
        <igc-radio class="radio">
          Label
        </igc-radio>
        <igc-radio class="radio">
          Label
        </igc-radio>
        <igc-radio class="radio">
          Label
        </igc-radio>
      </igc-radio-group>
    `;
  }
}
