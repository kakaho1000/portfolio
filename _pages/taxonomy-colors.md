---
title: "Configure taxonomy colors"
layout: single
---

<p>Enter one term per line using the format <strong>term: #hex</strong>. The color will be applied to that exact category or tag wherever it appears on the site.</p>

<form id="taxonomy-color-form">
  <div class="taxonomy-color-controls">
    <label class="taxonomy-color-field taxonomy-color-field--wide">
      <span>Categories</span>
      <textarea rows="8" data-taxonomy-color-input="categoryEntries" placeholder="Design: #2563eb&#10;Capstone: #a32616
      Complete: #16a34a "></textarea>
    </label>
    <label class="taxonomy-color-field taxonomy-color-field--wide">
      <span>Tags</span>
      <textarea rows="8" data-taxonomy-color-input="tagEntries" placeholder="CAD: #7c3aed&#10;SolidWorks: #dc2626"></textarea>
    </label>
  </div>
  <button type="button" id="taxonomy-color-reset">Reset to defaults</button>
</form>

<div class="taxonomy-color-preview">
  <p class="page__taxonomy">
    <strong>Preview:</strong>
    <a class="page__taxonomy-item p-category" href="#">Category</a>
    <a class="page__taxonomy-item p-tag" href="#">Tag</a>
  </p>
</div>
