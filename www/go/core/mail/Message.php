<?php

namespace go\core\mail;

class Message extends \Swift_Message {

	private $mailer;

	public function __construct(Mailer $mailer) {
		$this->mailer = $mailer;
		parent::__construct();
	}

	/**
	 * 
	 * @param \go\core\mail\Mailer $mailer
	 * @return int Number of successful recipients.
	 * 
	 */
	public function send(Mailer $mailer = null) {
		return $this->mailer->send($this);
	}

	public function setSubject($subject) {
		$this->getHeaders();
		return parent::setSubject($subject);
	}

}
