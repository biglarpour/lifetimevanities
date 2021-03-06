class Mayabath_Cart_Model_Observer extends Varien_Object
{
    public function afterAddToCart(Varien_Event_Observer $observer) {
        $response = $observer->getResponse();

        $response->setRedirect(Mage::getUrl('checkout/onepage'));
        Mage::getSingleton('checkout/session')->setNoCartRedirect(true);
    }
}